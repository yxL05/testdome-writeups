const DiscountType = {
  Standard: "Standard",
  Seasonal: "Seasonal",
  Weight: "Weight"
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  switch (discountType) {
    case "Standard":
      return totalPrice * 0.94;
    case "Seasonal":
      return totalPrice * 0.88;
    case "Weight":
      return (cartWeight <= 10) ? (totalPrice * 0.94) : (totalPrice * 0.82);
    default:
      return totalPrice;
  }
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));