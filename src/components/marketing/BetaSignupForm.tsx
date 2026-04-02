'use client';

import { useState } from 'react';
import { ChurchSize, churchSizeLabels, BetaSignupFormData, LeadSource } from '@/lib/types/lead';
import { Check, Loader2, AlertCircle } from 'lucide-react';

interface BetaSignupFormProps {
  source?: LeadSource;
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
        <h3 className="text-xl font-bold text-foreground mb-2">You&apos;re on the list!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for signing up for beta access. We&apos;ll reach out soon with your exclusive invitation.
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

  /* Shared input class — semantic tokens for correct light/dark rendering */
  const inputClass =
    'w-full px-4 py-2.5 bg-background text-foreground border border-border rounded-lg ' +
    'focus:ring-2 focus:ring-ring focus:border-primary outline-none transition-colors ' +
    'placeholder:text-muted-foreground/60';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
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
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
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
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
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
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
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
        <label htmlFor="churchName" className="block text-sm font-medium text-foreground mb-1">
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

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'}>
        <div>
          <label htmlFor="churchSize" className="block text-sm font-medium text-foreground mb-1">
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
          <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
            placeholder="Worship Pastor"
          />
        </div>
      </div>

      {showInterests && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            What features interest you most?
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {interestOptions.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInterestToggle(option.id)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full border transition-colors ${formData.interests?.includes(option.id)
                  ? 'bg-primary/20 border-primary/40 text-primary'
                  : 'bg-muted border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
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
        We&apos;ll never share your information.
      </p>
    </form>
  );
}

export default BetaSignupForm;
