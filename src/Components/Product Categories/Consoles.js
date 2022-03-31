import { ProductDetails } from "../ProductDetails";
// import { PRODUCTS } from "../PRODUCTS";
import { API_URL } from "../global";
import { useEffect, useState } from "react";

export function Consoles() {
  const [consoles, setConsoles] = useState([]);

  const getProduct = () => {
    fetch(`${API_URL}/products/consoles`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setConsoles(response));
  };

  useEffect(() => getProduct(), []);

  return (
    <div className="consoles">
      <h1 className="title">Consoles</h1>
      <div className="console-list">
        {consoles.map((product) => (
          <ProductDetails
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            numInStock={product.numInStock}
          />
        ))}
      </div>
    </div>
  );
}
