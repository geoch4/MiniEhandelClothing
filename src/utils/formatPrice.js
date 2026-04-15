export const formatPrice = (price) => {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK"
  }).format(price);
};
