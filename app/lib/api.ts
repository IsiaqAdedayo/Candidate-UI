import { ApplicationFormData, ApiResponse } from "../types";

export async function submitApplication(
  data: ApplicationFormData,
): Promise<ApiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2200));

  if (Math.random() < 0.2) {
    throw new Error('Network error: Could not reach the server.');
  }

  return {
    success: true,
    referenceId: 'TLT-' + Math.floor(100000 + Math.random() * 900000),
    message: 'Application received successfully.',
  };
}
