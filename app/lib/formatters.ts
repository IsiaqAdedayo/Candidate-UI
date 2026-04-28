/**
 * Formats a numeric string with commas as thousand separators.
 * Preserves the currency symbol (₦) if present at the start.
 * 
 * @param value The raw string value from input
 * @returns Formatted string with commas
 */
export const formatCurrency = (value: string) => {
  if (!value) return '';
  
  // Extract digits only
  const digits = value.replace(/\D/g, '');
  if (!digits) return value.startsWith('₦') ? '₦' : '';
  
  // Format with commas
  const formatted = new Intl.NumberFormat('en-US').format(parseInt(digits));
  
  // Return with currency symbol if it was there or if we want to enforce it
  // Given the placeholder, adding ₦ makes sense.
  return `₦${formatted}`;
};

/**
 * Removes formatting from a currency string to get the raw numeric value.
 * 
 * @param value The formatted string
 * @returns String containing only digits
 */
export const unformatCurrency = (value: string) => {
  return value.replace(/\D/g, '');
};
