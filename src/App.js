import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import { Home } from "./Home";
import { Controllers } from "./Controllers.1";
import { Games } from "./Games.1";
import { Consoles } from "./Consoles.1";
import { Contact } from "./Contact";
import { About } from "./About";
import Login from "./Login";
import NotFound from "./NotFound";
import Cart from "./Cart";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Home />
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
          {/* <Route path="/consoles">
            <Consoles />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/controllers">
            <Controllers />
          </Route> */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/contact">
            <Contact />
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
