import "./calender.scss";
import { useEffect, useState } from "react";

import moment from "moment";

export const Calendar = () => {
  const [dateList, setCurrentDate] = useState([]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    handleDate();
  }, []);

  const handleDate = () => {
    const currentDate = moment();
    const calenderDateList=[]

    for (let i = 0; i <= 15; i++) {
     
      const day = {
        day: currentDate.format("ddd"),
        date: currentDate.format("DD"),
        month: currentDate.format("MMM"),
      };

      calenderDateList.push(day);
      currentDate.add(1, "day");

    }

    setCurrentDate(calenderDateList);
  };
  const handleNext = () => {
    setVisibleStartIndex((prevIndex) => Math.min(prevIndex + 1, dateList.length - visibleCount));
  };

  const handlePrev = () => {
    setVisibleStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const visibleDates = dateList.slice(visibleStartIndex, visibleStartIndex + visibleCount);
  return (
    <div className="showTime container mt-2">
      <div className="dates-wrapper">
        <ul className="dates-container" >
          <button className="prev" onClick={handlePrev} disabled={visibleStartIndex === 0}>
            <i class="fa-solid fa-angle-left"></i>
          </button>
          {visibleDates.map((date) => (
            <li className="date-details">
              <a className="date-href" href="#">
                <div className="day">{date.day}</div>
                <div className="date">{date.date}</div>
                <div className="month">{date.month}</div>
              </a>
            </li>
          ))}

          <button className="next" onClick={handleNext} disabled={visibleStartIndex >= dateList.length - visibleCount}>
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </ul>
      </div>
    </div>
  );
};
