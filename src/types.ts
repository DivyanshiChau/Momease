export interface User {
  id: string;
  email: string;
  role: 'mother' | 'nanny';
  name: string;
  verified?: boolean;
  language: string;
}

export interface NannyProfile extends User {
  experience: number;
  motherTongue: string;
  aadharNumber: string;
  policeVerification: boolean;
  trainingCompleted: boolean;
  specializations: string[];
  availability: boolean;
  rating: number;
}

export interface MotherProfile extends User {
  healthInfo: {
    postpartumStage: string;
    medicalConditions: string[];
    dietaryRestrictions: string[];
  };
  financialBackground: {
    incomeRange: string;
    governmentSchemeEligible: boolean;
  };
  workBackground: {
    employed: boolean;
    maternityLeaveStatus: string;
  };
  subscriptionPlan?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  duration: string;
  isGovernmentSubsidized: boolean;
}