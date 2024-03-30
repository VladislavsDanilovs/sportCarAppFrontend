import React from "react";
import { CarModel } from "../../../../models/CarModel";

interface ReturnCarProps {
  car: CarModel;
}

export const ReturnCar = ({ car }: ReturnCarProps) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {car.img ? (
          <img src={car.img} width="151" height="233" alt="sportcar"></img>
        ) : (
          <img
            src={require("./../../../../Images/CarImages/lotus.jpg")}
            width="151"
            height="233"
            alt="sportcar"
          ></img>
        )}

        <h6 className="mt-2">{car.model}</h6>
        <p>{car.color}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
