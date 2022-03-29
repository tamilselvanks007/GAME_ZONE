import { ProductDetails } from "../ProductDetails";
import { PRODUCTS } from "../PRODUCTS";

export function Controllers() {
  const filterItems = PRODUCTS.filter(
    (item) => item.productType === "controller"
  );

  return (
    <div className="controllers">
      <h1 className="title">Controllers</h1>
      <div className="controller-list">
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
