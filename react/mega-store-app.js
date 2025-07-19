import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

const PriceCalculator = () => {
  const [type, setType] = useState("standard");
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);

  discountedPrice = useMemo(() => {
    switch (type) {
      case "standard":
        return price * 0.94;
      case "seasonal":
        return price * 0.88;
      case "weight":
        return (weight <= 10) ? price * 0.94 : price * 0.82;
    }
  }, [type, weight, price])

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="type" value={type} onChange={(e) => {setType(e.target.value)}}>
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight" step="0.01" value={weight} onChange={(e) => {setWeight(e.target.value)}}/>

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input type="number" id="totalPrice" name="totalPrice" step="0.01" value={price} onChange={(e) => {setPrice(e.target.value)}}/>

      <div>Discounted price:<span id="discountedPrice">{discountedPrice}</span></div>
    </div>
  );
};

document.body.innerHTML = "<div id='root'></div>";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PriceCalculator />);