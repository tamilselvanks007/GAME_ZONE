import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Home Page/Navbar";
import { Controllers } from "./Components/Product Categories/Controllers";
import { Games } from "./Components/Product Categories/Games";
import { Consoles } from "./Components/Product Categories/Consoles";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Cart from "./Components/Cart";
import Footer from "./Components/Home Page/Footer";
import Carousel from "./Components/Home Page/Carousel";
import Body from "./Components/Home Page/Body";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Switch>
          <Route path="/GAME_ZONE">
            <Carousel />
            <Body />
            <Footer />
          </Route>
          <Route exact path="/">
            <Carousel />
            <Body />
            <Footer />
          </Route>
          <Route exact path="/products">
            <Carousel />
            <Body />
            <Footer />
          </Route>
          <Route exact path="/products/consoles">
            <Consoles />
          </Route>
          <Route exact path="/products/games">
            <Games />
          </Route>
          <Route exact path="/products/controllers">
            <Controllers />
          </Route>
          <Route exact path="/about">
            <Body />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/contact">
            <Footer />
          </Route>
          <Route exact path="/**">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
