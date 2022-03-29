import { ProductDetails } from "../ProductDetails";
import { PRODUCTS } from "../PRODUCTS";

export function Games() {
  const filterItems = PRODUCTS.filter((item) => item.productType === "game");

  return (
    <div className="games">
      <h1 className="title">Games</h1>
      <div className="game-list">
        {filterItems.map((product) => (
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
