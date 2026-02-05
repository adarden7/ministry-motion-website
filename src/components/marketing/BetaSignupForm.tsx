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
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for signing up for beta access. We'll reach out soon with your exclusive invitation.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-2 text-blue-600 font-medium hover:text-blue-700"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className={compact ? 'space-y-3' : 'grid grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="john@yourchurch.org"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="churchName" className="block text-sm font-medium text-slate-700 mb-1">
          Church Name *
        </label>
        <input
          type="text"
          id="churchName"
          name="churchName"
          required
          value={formData.churchName}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Grace Community Church"
        />
      </div>

      <div className={compact ? 'space-y-3' : 'grid grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="churchSize" className="block text-sm font-medium text-slate-700 mb-1">
            Church Size *
          </label>
          <select
            id="churchSize"
            name="churchSize"
            required
            value={formData.churchSize}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
          >
            {(Object.entries(churchSizeLabels) as [ChurchSize, string][]).map(([value, label]) => (
              <option key={value} value={value}>{label} members</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">
            Your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Worship Pastor"
          />
        </div>
      </div>

      {showInterests && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What features interest you most?
          </label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInterestToggle(option.id)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  formData.interests?.includes(option.id)
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
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
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
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

      <p className="text-xs text-slate-500 text-center">
        By signing up, you agree to our Terms of Service and Privacy Policy.
        We'll never share your information.
      </p>
    </form>
  );
}

export default BetaSignupForm;
