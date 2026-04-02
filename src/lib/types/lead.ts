// Lead types for beta signup and lead generation
// Stored in Firestore 'leads' collection for HubSpot integration

export type LeadSource =
  | 'website_beta_signup'
  | 'landing_page'
  | 'pricing_page'
  | 'collective_page'
  | 'marketing_layout'
  | 'modern_home_balanced'
  | 'modern_home_page'
  | 'referral'
  | 'demo_request'
  | 'other';

export type LeadStatus =
  | 'new'           // Just submitted
  | 'contacted'     // Initial outreach made
  | 'qualified'     // Confirmed as good fit
  | 'demo_scheduled'// Demo meeting set
  | 'converted'     // Became a customer
  | 'disqualified'  // Not a fit
  | 'nurturing';    // Long-term follow-up

export type ChurchSize =
  | 'under_50'
  | '50_100'
  | '100_250'
  | '250_500'
  | '500_1000'
  | '1000_2500'
  | '2500_5000'
  | 'over_5000';

export interface Lead {
  id: string;

  // Contact info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Church info
  churchName: string;
  churchSize: ChurchSize;
  churchCity?: string;
  churchState?: string;
  churchCountry?: string;
  denomination?: string;
  churchWebsite?: string;

  // Role info
  role?: string;  // Their role at the church (e.g., "Worship Pastor", "Music Director")

  // Lead tracking
  source: LeadSource;
  status: LeadStatus;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referralCode?: string;

  // Interests (what features attracted them)
  interests?: string[];

  // Notes and follow-up
  notes?: string;

  // HubSpot integration
  hubspotContactId?: string;
  hubspotSyncedAt?: string;

  // Conversion tracking
  convertedToChurchId?: string;  // Links to churches collection if they become a customer
  convertedAt?: string;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

// Form input type (subset for the signup form)
export interface BetaSignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  churchName: string;
  churchSize: ChurchSize;
  role?: string;
  interests?: string[];
}

// API request/response types
export interface CreateLeadRequest extends BetaSignupFormData {
  source?: LeadSource;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface CreateLeadResponse {
  success: boolean;
  leadId?: string;
  error?: string;
}

// Church size display labels
export const churchSizeLabels: Record<ChurchSize, string> = {
  'under_50': 'Under 50',
  '50_100': '50-100',
  '100_250': '100-250',
  '250_500': '250-500',
  '500_1000': '500-1,000',
  '1000_2500': '1,000-2,500',
  '2500_5000': '2,500-5,000',
  'over_5000': '5,000+'
};
