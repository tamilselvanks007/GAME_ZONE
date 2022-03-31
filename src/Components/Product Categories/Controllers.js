import { useEffect, useState } from "react";
import { ProductDetails } from "../ProductDetails";
// import { PRODUCTS } from "../PRODUCTS";
import { API_URL } from "../global";

export function Controllers() {
  const [controllers, setControllers] = useState([]);

  const getProduct = () => {
    fetch(`${API_URL}/products/controllers`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setControllers(response));
  };

  useEffect(() => getProduct(), []);

  return (
    <div className="controllers">
      <h1 className="title">Controllers</h1>
      <div className="controller-list">
        {controllers.map((product) => (
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
