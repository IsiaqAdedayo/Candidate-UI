export type AvailabilityOption =
  | 'Immediately'
  | '2 Weeks'
  | '1 Month'
  | '3 Months'
  | 'Negotiable'
  | '';

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  position: string;
  experience: string;
  currentSalary: string;
  expectedSalary: string;
  coverLetter: string;
  skills: string[];
  availability: AvailabilityOption;
  resumeFile: File | null;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  position?: string;
  experience?: string;
  expectedSalary?: string;
  coverLetter?: string;
}

export interface ApiResponse {
  success: boolean;
  referenceId: string;
  message: string;
}

export type ViewState = 'form' | 'loading' | 'success' | 'error';
