import { useState, useEffect } from "react";
import styles from "../modules/Tournaments.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function Tournaments() {
  const [calendarHeight, setCalendarHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newHeight = windowWidth < 700 ? 400 : 600;
      setCalendarHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container} id="tournaments">
      <div className={styles.content}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,32C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
        <h2>Nuestros Torneos</h2>

        <div className={styles.calendar}>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: calendarHeight, color: "#7a38fe" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
