export type VerticalId = 'animalistt' | 'humanist' | 'greenist' | 'feminist' | 'general';

export interface VerticalInfo {
  id: VerticalId;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  caption: string;
  location: string;
  isPrimary?: boolean;
  pillars: string[];
  keyInitiatives: string[];
}

export interface WorkInitiative {
  id: string;
  verticalId: VerticalId;
  title: string;
  category: string;
  location: string;
  description: string;
  fieldNotes: string;
  image: string;
  imageCaption: string;
}

export interface Trustee {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  background: string;
  personalConnection: string;
}

export interface HelpRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  assistanceType: string;
  urgency: 'Immediate' | 'Within 24 Hours' | 'General Support';
  description: string;
  fileName?: string;
  submittedAt: string;
  status: 'Received' | 'Under Verification' | 'Dispatched' | 'Resolved';
}

export interface DonationSubmission {
  id: string;
  donorName: string;
  isAnonymous: boolean;
  vertical: VerticalId;
  amount: number;
  currency: string;
  date: string;
  message?: string;
  wants80G: boolean;
  panNumber?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface CollagePhoto {
  id: string;
  url: string;
  alt: string;
  caption: string;
  location: string;
  vertical: string;
  aspectClass: string;
}

export interface FoundationCampaign {
  id: string;
  verticalId: VerticalId;
  tag: string;
  category: string;
  title: string;
  lead: string;
  raised: number;
  goal: number;
  donorsCount: number;
  image: string;
  location: string;
  description: string;
}
