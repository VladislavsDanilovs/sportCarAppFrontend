import { useEffect, useState } from "react";
import { CarModel } from "../../models/CarModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { Link } from "react-router-dom";
import { StarsReview } from "../Utils/StarsReview";

export const CarCheckoutPage = () => {
  const [car, setCar] = useState<CarModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const carId = window.location.pathname.split("/")[2]; //Here I just want to grab a pathparameter from url, for example http://localhost:3000/checkout/1 , from this I will take 1

  useEffect(() => {
    const fetchCar = async () => {
      const baseUrl: string = `http://localhost:8080/api/cars/${carId}`;

      try {
        const url: string = `${baseUrl}?page=0&size=9`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Invalid Response");
        }

        const responseJson = await response.json();

        const loadedCar: CarModel = {
          id: responseJson.id,
          model: responseJson.model,
          color: responseJson.color,
          fuelType: responseJson.fuelType,
          year: responseJson.year,
          carsAvailable: responseJson.carsAvailable,
          type: responseJson.type,
          img: responseJson.img,
        };

        setCar(loadedCar);
      } catch (error: any) {
        // Handle the error here
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
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
    <div>
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            {car?.img ? (
              <img src={car?.img} width="226" height="349" alt="Book" />
            ) : (
              <img
                src={require("./../../Images/CarImages/lotus.jpg")}
                width="226"
                height="349"
                alt="Book"
              />
            )}
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h2>{car?.model}</h2>
              <h5 className="text-primary">{car?.color}</h5>
              <p className="lead">{car?.year}</p>
              <p className="lead">
                {"Currently available amount of this car: " +
                  car?.carsAvailable}
              </p>
              <p className="lead">
                {"Fuel type of this car: " + car?.fuelType}
              </p>
              <p className="lead">{"Type of car: " + car?.type}</p>

              <Link
                className="btn btn-md main-color text-white"
                to={`/search/`}
              >
                Back to search
              </Link>
              <div className="mt-4">
                <StarsReview rating={2.5} size={32} />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          {car?.img ? (
            <img src={car?.img} width="226" height="349" alt="Book" />
          ) : (
            <img
              src={require("./../../Images/CarImages/lotus.jpg")}
              width="226"
              height="349"
              alt="Book"
            />
          )}
        </div>
        <div className="mt-4">
          <div className="ml-2">
            <h2>{car?.model}</h2>
            <h5 className="text-primary">{car?.color}</h5>
            <p className="lead">{car?.year}</p>
            <p className="lead">
              {"Currently available amount of this car: " + car?.carsAvailable}
            </p>
            <p className="lead">{"Fuel type of this car: " + car?.fuelType}</p>
            <p className="lead">{"Type of car: " + car?.type}</p>

            <Link className="btn btn-md main-color text-white" to={`/search/`}>
              Back to search
            </Link>
            <div className="mt-4">
              <StarsReview rating={4.5} size={32} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
