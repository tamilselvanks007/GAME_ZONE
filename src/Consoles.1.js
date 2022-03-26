import { CONSOLES } from "./CONSOLES";
import { ProductDetails } from "./ProductDetails";

export function Consoles() {
  return (
    <div className="consoles">
      <h1 className="title">Consoles</h1>
      <div className="console-list">
        {CONSOLES.map((product) => (
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
