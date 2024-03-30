import { Carousel } from "./components/Carousel";
import { ExploreTopCars } from "./components/ExploreTopCars";
import { Heroes } from "./components/Heroes";
import { SportCarServices } from "./components/SportCarServices";
import { UserInfo } from "./components/UserInfo";

export const HomePage = () => {
  return (
    <>
      <ExploreTopCars />
      <Carousel />
      <UserInfo />
      <Heroes />
      <SportCarServices />
    </>
  );
};
