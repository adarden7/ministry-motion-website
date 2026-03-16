'use client';

import { useState } from 'react';
import { ChurchSize, churchSizeLabels, BetaSignupFormData } from '@/lib/types/lead';
import { Check, Loader2, AlertCircle } from 'lucide-react';

interface BetaSignupFormProps {
  source?: string;
  onSuccess?: (leadId: string) => void;
  onClose?: () => void;
  className?: string;
  showInterests?: boolean;
  compact?: boolean;
}

const interestOptions = [
  { id: 'vocal_coaching', label: 'AI Vocal Coaching' },
  { id: 'service_planning', label: 'Service Planning' },
  { id: 'team_scheduling', label: 'Team Scheduling' },
  { id: 'rehearsal_rooms', label: 'Digital Rehearsal Rooms' },
  { id: 'learning_hub', label: 'Learning Hub & Courses' },
  { id: 'service_analytics', label: 'Service Analytics' },
  { id: 'communications', label: 'Unified Communications' },
  { id: 'member_management', label: 'Member Management' },
];

export function BetaSignupForm({
  source = 'website_beta_signup',
  onSuccess,
  onClose,
  className = '',
  showInterests = true,
  compact = false
}: BetaSignupFormProps) {
  const [formData, setFormData] = useState<BetaSignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    churchName: '',
    churchSize: '100_250',
    role: '',
    interests: []
  });
  const [honeypot, setHoneypot] = useState(''); // RT-07 FIX: bot trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests?.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...(prev.interests || []), interestId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // RT-07 FIX: Silently reject bot submissions
    if (honeypot) {
      setSuccess(true);
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      // Get UTM params from URL
      const urlParams = new URLSearchParams(window.location.search);

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source,
          utmSource: urlParams.get('utm_source') || undefined,
          utmMedium: urlParams.get('utm_medium') || undefined,
          utmCampaign: urlParams.get('utm_campaign') || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSuccess(true);
      onSuccess?.(result.leadId);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">You're on the list!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for signing up for beta access. We'll reach out soon with your exclusive invitation.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  /* Shared input class */
  const inputClass =
    `w-full px-3 ${compact ? 'py-1.5 text-sm' : 'py-2.5'} bg-slate-800 text-white border border-slate-600 rounded-lg ` +
    'focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ' +
    'placeholder:text-slate-500';

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'space-y-3' : 'space-y-4'} ${className}`}>
      {/* RT-07 FIX: Honeypot — invisible to real users, filled by bots */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className={compact ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="firstName" className="block text-xs font-medium text-slate-300 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-xs font-medium text-slate-300 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="john@yourchurch.org"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="churchName" className="block text-xs font-medium text-slate-300 mb-1">
          Church Name *
        </label>
        <input
          type="text"
          id="churchName"
          name="churchName"
          required
          value={formData.churchName}
          onChange={handleChange}
          className={inputClass}
          placeholder="Grace Community Church"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="churchSize" className="block text-xs font-medium text-slate-300 mb-1">
            Church Size *
          </label>
          <select
            id="churchSize"
            name="churchSize"
            required
            value={formData.churchSize}
            onChange={handleChange}
            className={inputClass}
          >
            {(Object.entries(churchSizeLabels) as [ChurchSize, string][]).map(([value, label]) => (
              <option key={value} value={value}>{label} members</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="role" className="block text-xs font-medium text-slate-300 mb-1">
            Your Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select your role...</option>
            <option value="Worship Pastor">Worship Pastor</option>
            <option value="Worship Director">Worship Director</option>
            <option value="Praise Leader">Praise Leader</option>
            <option value="Minister of Music">Minister of Music</option>
            <option value="Executive Pastor">Executive Pastor</option>
            <option value="Lead Pastor">Lead Pastor</option>
            <option value="Ministries Director">Ministries Director</option>
            <option value="Church Administrator">Church Administrator</option>
            <option value="Vocalist">Vocalist</option>
            <option value="Musician">Musician</option>
            <option value="Sound/Tech">Sound / Tech Director</option>
            <option value="Youth Worship Leader">Youth Worship Leader</option>
            <option value="Children's Ministry Director">Children's Ministry Director</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {showInterests && (
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Features you're interested in
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {interestOptions.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInterestToggle(option.id)}
                className={`px-2.5 py-1 text-xs rounded-md border transition-colors text-left ${
                  formData.interests?.includes(option.id)
                    ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                    : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-blue-500/30 hover:text-slate-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Sign Up for Beta Access'
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By signing up, you agree to our Terms of Service and Privacy Policy.
        We'll never share your information.
      </p>
    </form>
  );
}

export default BetaSignupForm;
