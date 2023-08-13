import React from "react";

export const ReturnCar = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../../Images/CarImages/lotus.jpg")}
          width="151"
          height="233"
          alt="sportcar"
        ></img>
        <h6 className="mt-2">Sport car</h6>
        <p>Cars</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
