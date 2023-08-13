import { Carousel } from "./components/Carousel";
import { ExploreTopCars } from "./components/ExploreTopCars";
import { Heroes } from "./components/Heroes";
import { SportCarServices } from "./components/SportCarServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopCars />
      <Carousel />
      <Heroes />
      <SportCarServices />
    </>
  );
};
