import React from "react";
import { Greeting } from "../GreetingEnum";
import { TimeData } from "../FetchProps";

type PopupProps = {
  greeting: Greeting;
  timeData: TimeData | undefined;
};

const Popup = ({ greeting, timeData }: PopupProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {timeData ? (
        <div
          className={`popup ${
            greeting === "Evening" ? "popup--night" : "popup--day"
          }`}
        >
          <div className="popup__section">
            <p className="popup__text">Current timezone</p>
            <p className="popup__var">{timeData.timezone}</p>
          </div>
          <div className="popup__section">
            <p className="popup__text">Day of the year</p>
            <p className="popup__var">{timeData.day_of_year}</p>
          </div>
          <div className="popup__section">
            <p className="popup__text">Day of the Week</p>
            <p className="popup__var">{timeData.day_of_week}</p>
          </div>
          <div className="popup__section">
            <p className="popup__text">Week number</p>
            <p className="popup__var">{timeData.week_number}</p>
          </div>
        </div>
      ) : (
        <p>lol</p>
      )}
    </>
  );
};

export default Popup;
