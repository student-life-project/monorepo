const local = 'es-MX';

const formatOptions = {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: 'currency',
};

export const formatter = (currency = 'MXN'): any =>
  new Intl.NumberFormat(local, {
    ...formatOptions,
    style: 'currency',
    currency,
  });
