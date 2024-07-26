import "./calender.scss";

export const Calendar = () => {
  return (
    <div className="showTime">
      <div className="dates-wrapper">
        <ul className="dates-container">
          <button className="prev">
          <i class="fa-solid fa-angle-left"></i>
          </button>
          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">FRI</div>
              <div className="date">26</div>
              <div className="month">JUL</div>
            </a>
          </li>

          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">SAT</div>
              <div className="date">27</div>
              <div className="month">JUL</div>
            </a>
          </li>

          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">SUN</div>
              <div className="date">28</div>
              <div className="month">JUL</div>
            </a>
          </li>

          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">Mon</div>
              <div className="date">29</div>
              <div className="month">JUL</div>
            </a>
          </li>

          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">TUE</div>
              <div className="date">30</div>
              <div className="month">JUL</div>
            </a>
          </li>

          <li className="date-details">
            <a className="date-href" href="#">
              <div className="day">WED</div>
              <div className="date">1</div>
              <div className="month">AUg</div>
            </a>
          </li>
          <button className="next">
          <i class="fa-solid fa-angle-right"></i>
          </button>
        </ul>
      </div>
    </div>
  );
};
