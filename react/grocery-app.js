import React from 'react';
import { createRoot } from 'react-dom/client';

const Product = props => {
  const plus = () => {
    props.onVote(1, props.index);
  };
  const minus = () => {
    props.onVote(-1, props.index);
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    setProducts(products.map((product, i) => 
      i === index ? {...product, votes: product.votes + dir} : product
    ))
  };

  return (
    <ul>
      {products.map((product, i) => 
        <Product key={i} index={i} onVote={onVote} name={product.name} votes={product.votes} />
      )}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if(plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById('root').outerHTML);
  });
});