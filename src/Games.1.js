import { GAMES } from "./GAMES";
import { ProductDetails } from "./ProductDetails";

export function Games() {
  return (
    <div className="games">
      <h1 className="title">Games</h1>
      <div className="game-list">
        {GAMES.map((product) => (
          <ProductDetails
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            numInStock={product.numInStock} />
        ))}
      </div>
    </div>
  );
}
