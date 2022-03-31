import { useEffect, useState } from "react";
import { ProductDetails } from "../ProductDetails";
// import { PRODUCTS } from "../PRODUCTS";
import { API_URL } from "../global";

export function Games() {
  const [games, setGames] = useState([]);

  const getProduct = () => {
    fetch(`${API_URL}/products/games`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setGames(response));
  };

  useEffect(() => getProduct(), []);

  return (
    <div className="games">
      <h1 className="title">Games</h1>
      <div className="game-list">
        {games.map((product) => (
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
