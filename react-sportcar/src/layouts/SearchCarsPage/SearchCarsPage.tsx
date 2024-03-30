import { useEffect, useState } from "react";
import { CarModel } from "../../models/CarModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchCar } from "./components/SearchCar";
import { Pagination } from "../Utils/Pagination";

export const SearchCarsPage = () => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(5);
  const [totalAmountOfCars, setTotalAmountOfCars] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [colorSelection, setColorSelection] = useState("Select color");

  useEffect(() => {
    const fetchCars = async () => {
      const baseUrl: string = "http://localhost:8080/api/cars";

      try {
        let url: string = "";

        if (searchUrl === "") {
          url = `${baseUrl}?page=${currentPage - 1}&size=${carsPerPage}`;
        } else {
          let seacrhWithPage = searchUrl.replace(
            "<pageNumber>",
            `${currentPage - 1}`
          );
          url = baseUrl + searchUrl;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Invalid Response");
        }

        const responseJson = await response.json();
        const responseData = responseJson._embedded.cars;
        setTotalAmountOfCars(responseJson.page.totalElements);
        setTotalPages(responseJson.page.totalPages);
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
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

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

  const searchHandleChange = () => {
    setCurrentPage(1);
    if (search === "") {
      setSearchUrl("");
    } else {
      setSearchUrl(
        `/search/findByModelContaining?model=${search}&page=<pageNumber>&size=${carsPerPage}`
      );
      setColorSelection("Select color");
    }
  };

  const colorHandleChange = (value: string) => {
    setCurrentPage(1);
    const validColors = [
      "Red",
      "White",
      "Black",
      "Purple",
      "Metallic",
      "Dark-grey",
    ];
    if (validColors.includes(value)) {
      setColorSelection(value);
      setSearchUrl(
        `/search/findByColor?color=${value}&page=<pageNumber>&size=${carsPerPage}`
      );
    } else {
      setColorSelection("Select color");
      setSearchUrl(`?page=<pageNumber>&size=${carsPerPage}`);
    }
  };

  const indexOfLastCar: number = currentPage * carsPerPage;
  const indexofFirstCar: number = indexOfLastCar - carsPerPage;
  let lastItem =
    carsPerPage * currentPage <= totalAmountOfCars
      ? carsPerPage * currentPage
      : totalAmountOfCars;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-labelledby="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={() => searchHandleChange()}
                >
                  Search
                </button>
              </div>
              <div className="col-4 mt-2">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {colorSelection}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li onClick={() => colorHandleChange("Select color")}>
                      <a className="dropdown-item" href="#">
                        Select color
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("Red")}>
                      <a className="dropdown-item" href="#">
                        Red
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("White")}>
                      <a className="dropdown-item" href="#">
                        White
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("Black")}>
                      <a className="dropdown-item" href="#">
                        Black
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("Purple")}>
                      <a className="dropdown-item" href="#">
                        Purple
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("Metallic")}>
                      <a className="dropdown-item" href="#">
                        Metallic
                      </a>
                    </li>
                    <li onClick={() => colorHandleChange("Dark-grey")}>
                      <a className="dropdown-item" href="#">
                        Dark-grey
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {totalAmountOfCars > 0 ? (
              <>
                <div className="mt-3">
                  <h5> Number of results: ({totalAmountOfCars})</h5>
                </div>
                <p>
                  {indexofFirstCar + 1} to {lastItem} of {totalAmountOfCars}{" "}
                  items:
                </p>
                {cars.map((carItem) => (
                  <SearchCar car={carItem} key={carItem.id} />
                ))}
              </>
            ) : (
              <div className="m-5">
                <h3>Can't find what you are looking for?</h3>
                <a
                  type="button"
                  className="btn main-color btn-md px-4 me-md-2 fw-bold text white"
                  href="#"
                >
                  Car Services
                </a>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </div>
  );
};
