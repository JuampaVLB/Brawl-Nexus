import { useState, useEffect } from "react";
import styles from "../modules/Tournaments.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Card from "../components/Card";

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

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color;

    const style = {
      backgroundColor,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "none",
      display: "block",
    };

    return {
      style,
    };
  };

  const events = [
    {
      title: "Next Stage SA 1v1 #11",
      color: "orange",
      image: "nextstage",
      prize: 100,
      region: "BRZ",
      start: new Date(2023, 5, 16, 14, 0), // Fecha y hora de inicio del evento
      end: new Date(2023, 5, 16, 19, 0), // Fecha y hora de fin del evento
    },
    {
      title: "Extra Stage SA 1v1",
      color: "red",
      start: new Date(2023, 5, 5, 14, 0), // Fecha y hora de inicio del evento
      end: new Date(2023, 5, 5, 19, 0), // Fecha y hora de fin del evento
    },
    {
      title: "Battle Frontier SA 2v2 #15",
      color: "purple",
      start: new Date(2023, 5, 26, 14, 0), // Fecha y hora de inicio del evento
      end: new Date(2023, 5, 26, 19, 0), // Fecha y hora de fin del evento
    },
    {
      title: "NXmaS - Extra Stage NA 1v1 ",
      color: "green",
      start: new Date(2023, 5, 3, 14, 0), // Fecha y hora de inicio del evento
      end: new Date(2023, 5, 3, 19, 0), // Fecha y hora de fin del evento
    },
  ];

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
            events={events}
            eventPropGetter={eventStyleGetter}
            style={{ height: calendarHeight, color: "#121211" }}
          />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Tournaments;
