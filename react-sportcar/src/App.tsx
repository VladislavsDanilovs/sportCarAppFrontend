import React from 'react';
import './App.css';
import { Carousel } from './layouts/NavbarAndFooter/HomePage/Carousel';
import { ExploreTopCars } from './layouts/NavbarAndFooter/HomePage/ExploreTopCars';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <ExploreTopCars/>
    <Carousel/>
    </>
  );
}

export default App;