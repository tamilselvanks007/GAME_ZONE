import { CONTROLLERS } from "./CONTROLLERS";
import { ProductDetails } from "./ProductDetails";

export function Controllers() {
  return (
    <div className="controllers">
      <h1 className="title">Controllers</h1>
      <div className="controller-list">
        {CONTROLLERS.map((product) => (
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
