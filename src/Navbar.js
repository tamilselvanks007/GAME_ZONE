import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        <img
          src={
            "https://cdn-icons.flaticon.com/png/512/2157/premium/2157113.png?token=exp=1648235240~hmac=7a86b24352980a4ad4b61393c7cf0293"
          }
          alt="logo"
          style={{ widhth: "15px", height: "30px" }}
        />
        GAME ZONE
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="navbar-nav collapse navbar-collapse" id="navbarNavDropdown">
        <li class="nav-item">
          <Link to="/" class="nav-link">
            Home
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            to="/"
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Products
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/products/consoles" class="navbar dropdown-item">
              Consoles
            </Link>
            <Link to="/products/games" class="navbar dropdown-item">
              Games
            </Link>
            <Link to="/products/controllers" class="navbar dropdown-item">
              Controllers
            </Link>
          </div>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link">
            Contact
          </Link>
        </li>

        <li
          class="nav-item"
          style={{ display: "flex", flexDirection: "column" }}
        >
          
        </li>
        <li class="nav-item">
          
        </li>
      </ul>
      <Link to="/login" onClick={() => history.push("/login")} class="navbar">
            <PersonIcon />
          </Link>
          <Link to="/cart" class="navbar">
            <ShoppingBasketIcon />
          </Link>
    </nav>
  );
}
