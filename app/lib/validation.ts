import { ApplicationFormData, FormErrors } from "../types";


export function validateForm(data: ApplicationFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.position) errors.position = 'Please select a position';
  if (!data.experience) errors.experience = 'Please select your experience range';
  if (!data.expectedSalary.trim()) errors.expectedSalary = 'Expected salary is required';

  if (!data.coverLetter.trim()) {
    errors.coverLetter = 'Cover letter is required';
  } else if (data.coverLetter.trim().length < 30) {
    errors.coverLetter = 'Please write at least 30 characters';
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
