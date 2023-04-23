import React from "react";
import { Greeting } from "../GreetingEnum";

type PopupProps = {
  greeting: Greeting;
  timezone: string;
  dayOfTheWeek: number;
  dayOfTheYear: number;
  weekNumber: number;
};

const Popup = ({
  greeting,
  timezone,
  dayOfTheWeek,
  dayOfTheYear,
  weekNumber,
}: PopupProps) => {
  return (
    <div
      className={`popup ${
        greeting === "Evening" ? "popup--night" : "popup--day"
      }`}
    >
      <div className="popup__section">
        <p className="popup__text">Current timezone</p>
        <p className="popup__var">{timezone}</p>
      </div>
      <div className="popup__section">
        <p className="popup__text">Day of the year</p>
        <p className="popup__var">{dayOfTheYear}</p>
      </div>
      <div className="popup__section">
        <p className="popup__text">Day of the Week</p>
        <p className="popup__var">{dayOfTheWeek}</p>
      </div>
      <div className="popup__section">
        <p className="popup__text">Week number</p>
        <p className="popup__var">{weekNumber}</p>
      </div>
    </div>
  );
};

export default Popup;
