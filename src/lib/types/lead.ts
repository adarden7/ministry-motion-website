// Lead types for beta signup and lead generation

export type LeadSource =
  | 'website_beta_signup'
  | 'landing_page'
  | 'pricing_page'
  | 'collective_page'
  | 'referral'
  | 'demo_request'
  | 'other';

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'demo_scheduled'
  | 'converted'
  | 'disqualified'
  | 'nurturing';

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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  churchName: string;
  churchSize: ChurchSize;
  churchCity?: string;
  churchState?: string;
  churchCountry?: string;
  denomination?: string;
  churchWebsite?: string;
  role?: string;
  source: LeadSource;
  status: LeadStatus;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referralCode?: string;
  interests?: string[];
  notes?: string;
  hubspotContactId?: string;
  hubspotSyncedAt?: string;
  convertedToChurchId?: string;
  convertedAt?: string;
  createdAt: string;
  updatedAt: string;
}

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
