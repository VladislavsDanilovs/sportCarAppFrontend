import { useEffect, useState } from "react";
import { ReturnCar } from "./ReturnCar";
import { CarModel } from "../../../../models/CarModel";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      const baseUrl: string = "http://localhost:8080/api/cars";

      try {
        const url: string = `${baseUrl}?page=0&size=9`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Invalid Response");
        }

        const responseJson = await response.json();
        const responseData = responseJson._embedded.cars;
        const loadedCars: CarModel[] = [];

        for (const key in responseData) {
          loadedCars.push({
            id: responseData[key].id,
            model: responseData[key].model,
            color: responseData[key].color,
            fuelType: responseData[key].fuelType,
            year: responseData[key].year,
            carsAvailable: responseData[key].carsAvailable,
            type: responseData[key].type,
            img: responseData[key].img,
          });
        }

        setCars(loadedCars);
      } catch (error: any) {
        // Handle the error here
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (isLoading) {
    return <SpinnerLoading></SpinnerLoading>;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Cruise into Your Dream Ride: Discover Your Perfect Car!</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5
            d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {cars.slice(0, 3).map((cars) => (
                <ReturnCar car={cars} key={cars.id}></ReturnCar>
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {cars.slice(3, 6).map((cars) => (
                <ReturnCar car={cars} key={cars.id}></ReturnCar>
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {cars.slice(6, 9).map((cars) => (
                <ReturnCar car={cars} key={cars.id}></ReturnCar>
              ))}
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnCar car={cars[7]} key={cars[7].id} />
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <Link className="btn btn-outline-secondary btn-lg" to="/search">
          View More
        </Link>
      </div>
    </div>
  );
};
