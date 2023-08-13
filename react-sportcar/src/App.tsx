import "./App.css";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { HomePage } from "./layouts/NavbarAndFooter/HomePage/HomePage";

export const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};
