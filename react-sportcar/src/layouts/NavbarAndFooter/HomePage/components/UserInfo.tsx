export {};

export const UserInfo = () => {
  return (
    <div>
      <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
        <div className="ml-5">
          <h1>Want to get special offers from us? Fill credentials bellow! </h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select className="form-control" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit" className="btn btn-danger mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
