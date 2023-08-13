export const Heroes = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1> What's Your Current Vehicle? </h1>
              <p className="lead">
                Immerse yourself in the world of driving exhilaration through
                our meticulously crafted services. Elevate your current sports
                car's capabilities with enhancements that redefine performance,
                luxury, and enjoyment, ensuring each drive is an extraordinary
                adventure
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1> Our collection is always changing!</h1>
              <p className="lead">
                Make it a habit to visit us daily, as our ever-evolving
                collection promises something new each day! From every corner of
                the world, we tirelessly source and offer the most exceptional
                vehicles, driven by an unwavering commitment to our clients.
                With an unwavering focus on quality and a passion for
                perfection, we take pride in providing vehicles that surpass
                expectations, demonstrating our expertise and commitment to our
                clients.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* Mobile Heroes component */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1> What's Your Current Vehicle? </h1>
              <p className="lead">
                Immerse yourself in the world of driving exhilaration through
                our meticulously crafted services. Elevate your current sports
                car's capabilities with enhancements that redefine performance,
                luxury, and enjoyment, ensuring each drive is an extraordinary
                adventure
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1> Our collection is always changing!</h1>
              <p className="lead">
                Make it a habit to visit us daily, as our ever-evolving
                collection promises something new each day! From every corner of
                the world, we tirelessly source and offer the most exceptional
                vehicles, driven by an unwavering commitment to our clients.
                With an unwavering focus on quality and a passion for
                perfection, we take pride in providing vehicles that surpass
                expectations, demonstrating our expertise and commitment to our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
