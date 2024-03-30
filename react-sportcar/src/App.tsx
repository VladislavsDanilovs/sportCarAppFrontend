import "./App.css";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { HomePage } from "./layouts/NavbarAndFooter/HomePage/HomePage";
import { SearchCarsPage } from "./layouts/SearchCarsPage/SearchCarsPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { CarCheckoutPage } from "./layouts/CarCheckoutPage/CarCheckoutPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/search">
            <SearchCarsPage />
          </Route>
          <Route path="/checkout/:carId">
            <CarCheckoutPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};
