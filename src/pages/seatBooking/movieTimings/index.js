import "./timings.scss";
export const Timings = () => {
  return (
    <div className="timingsWrapper pt-2">
      <div className="container timingsContainer">
        <div className="row attributes-container">
          <div className="legends-container">
            <div className="showtimes-legends">
              <div className="legend-icon"></div>
              <div className="legend-text">AVAILABLE</div>
            </div>
            <div className="showtimes-legends">
              <div className="legend-icon fast"></div>
              <div className="legend-text">FAST FILLING</div>
            </div>
            <div className="showtimes-legends">
              <div className="legend-text">SUBTITTLES LANGUAGE</div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-3 hallinfo">
            <div className="hallName">
              <a href="" className="hallNameTag">
                {" "}
                PVR: Escape-Express, Avenue Mall
              </a>
            </div>
          </div>
          <div className="col-9 timingsinfo mt-4">
            <div class="container text-center">
              <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-1">
                <div class="col timingBox me-3">
                  <div class="p-3">11:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">03:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">06:30PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">09:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">10:30PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-3 hallinfo">
            <div className="hallName">
              <a href="" className="hallNameTag">
                {" "}
               AGS Cinemas: T. Nagar 
              </a>
            </div>
          </div>
          <div className="col-9 timingsinfo mt-4">
            <div class="container text-center">
              <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-1">
                <div class="col timingBox me-3">
                  <div class="p-3">11:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">03:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">06:30PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">09:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">10:30PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-3 hallinfo">
            <div className="hallName">
              <a href="" className="hallNameTag">
                {" "}
                Anna Cinemas: Mount Road
              </a>
            </div>
          </div>
          <div className="col-9 timingsinfo mt-4">
            <div class="container text-center">
              <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-1">
                <div class="col timingBox me-3">
                  <div class="p-3">11:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">03:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">06:30PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">09:00PM</div>
                </div>
                <div class="col timingBox me-3">
                  <div class="p-3">10:30PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
