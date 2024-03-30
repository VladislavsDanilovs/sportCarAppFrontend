import { Link } from "react-router-dom";
import { CarModel } from "../../../models/CarModel";

interface SearchCarProps {
  car: CarModel;
}

export const SearchCar = ({ car }: SearchCarProps) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <Link to={`/checkout/${car.id}`}>
            <div className="d-none d-lg-block">
              {car.img ? (
                <img src={car.img} width="123" height="196" alt="Car" />
              ) : (
                <img
                  src={require("./../../../Images/CarImages/lotus.jpg")}
                  width="123"
                  height="196"
                  alt="Car"
                />
              )}
            </div>
            <div className="d-lg-none d-flex justify-content-center align-items-center">
              {car.img ? (
                <img src={car.img} width="123" height="196" alt="Car" />
              ) : (
                <img
                  src={require("./../../../Images/CarImages/lotus.jpg")}
                  width="123"
                  height="196"
                  alt="Car"
                />
              )}
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{car.model}</h5>
            <h4>{car.color}</h4>
            <p className="card-text">{car.year}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Link
            className="btn btn-md main-color text-white"
            to={`/checkout/${car.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
