import { ProductDetails } from "../ProductDetails";
import { PRODUCTS } from "../PRODUCTS";

export function Consoles() {
  const filterItems = PRODUCTS.filter(
    (item) => item.productType === "consoles"
  );

  return (
    <div className="consoles">
      <h1 className="title">Consoles</h1>
      <div className="console-list">
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
