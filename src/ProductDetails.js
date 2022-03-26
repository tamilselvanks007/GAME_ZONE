import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function ProductDetails({ name, price, description, image, numInStock }) {
  return (
    <Card className="product-container">
      <img className="product-image" src={image} alt="" />
      <CardContent style={{ backgroundColor: "lavender" }}>
        <div className="name-price">
          <h2 className="product-name">{name}</h2>
          <p className="product-price">{price}</p>
        </div>
        <p className="product-description"> {description}</p>
        <p className="product-stock">
          {numInStock ? (
            <h3 style={{ color: "green" }}>In Stock</h3>
          ) : (
            <h3 style={{ color: "red" }}>Out of Stock</h3>
          )}
        </p>
      </CardContent>
      <CardActions style={{ backgroundColor: "lavender", display: "flex", flexDirection: "column"}}>
      <Button variant="contained" href="#" color="warning">
        Add to Cart <AddShoppingCartIcon /> 
      </Button>
      </CardActions>
    </Card>
  );
}
