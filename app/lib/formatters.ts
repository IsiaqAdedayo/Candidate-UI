export const formatCurrency = (value: string) => {
  if (!value) return '';

  const digits = value.replace(/\D/g, '');
  if (!digits) return value.startsWith('₦') ? '₦' : '';

  const formatted = new Intl.NumberFormat('en-US').format(parseInt(digits));

  return `₦${formatted}`;
};


export const unformatCurrency = (value: string) => {
  return value.replace(/\D/g, '');
};
