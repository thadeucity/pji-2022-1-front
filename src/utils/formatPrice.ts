export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'BRL',
  }).format(price / 100); // cents to real
}