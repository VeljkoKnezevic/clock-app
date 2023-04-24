import { SetStateAction, useEffect, useState } from "react";
import { TimeData } from "../FetchProps";
import { Greeting } from "../GreetingEnum";

type TimeProps = {
  greeting: Greeting;
  setGreeting: React.Dispatch<SetStateAction<Greeting>>;
  clicked: boolean;
  setClicked: React.Dispatch<SetStateAction<boolean>>;
  timeData: TimeData | undefined;
  setTimeData: React.Dispatch<SetStateAction<TimeData | undefined>>;
};

const Time = ({
  greeting,
  setGreeting,
  clicked,
  setClicked,
  timeData,
  setTimeData,
}: TimeProps) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date>();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (currentTime) {
      const hours = currentTime.getHours();

      if (hours >= 5 && hours < 12) {
        setGreeting("Morning");
      } else if (hours >= 12 && hours < 18) {
        setGreeting("Afternoon");
      } else {
        setGreeting("Evening");
      }
    }
  }, [doneLoading]);

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
        setCurrentTime(new Date(data.datetime));
        setTimeData(data);
        setDoneLoading(true);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };

    const getIp = async () => {
      try {
        const response = await fetch(
          "https://api.ipbase.com/v2/info?apikey=jrob6eT3jNFnDRt7nphWZBPAeWVTPyLhLxGQ421i"
        );
        const data = await response.json();
        setCity(data.data.location.city.name);
        setCountry(
          data.data.location.country.alpha3 || data.data.location.country.alpha2
        );
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };

    getIp();
    getTime();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {timeData ? (
        <div className={`time  ${clicked ? "clicked" : ""}`}>
          <div>
            <div className="greeting">
              <img
                className="greeting__image"
                src={
                  greeting === "Evening"
                    ? "/desktop/icon-moon.svg"
                    : "/desktop/icon-sun.svg"
                }
                alt={greeting === "Evening" ? "Moon" : "Sun"}
              />
              <p className="greeting__text">Good {doneLoading && greeting}</p>
            </div>
            <div className="clock">
              <p className="clock__text">
                {currentTime
                  ? `${
                      currentTime.getHours() < 10
                        ? `0${currentTime.getHours()}`
                        : currentTime.getHours()
                    }:${
                      currentTime.getMinutes() < 10
                        ? `0${currentTime.getMinutes()}`
                        : currentTime.getMinutes()
                    } `
                  : ""}
              </p>
              <p className="clock__abb">{timeData.abbreviation}</p>
            </div>
            <p className="location">
              in {city || "belgrade"}, {country || "srb"}
            </p>
          </div>
          <button
            onClick={() => setClicked(!clicked)}
            className={`button ${clicked ? "button--clicked" : ""}`}
            type="button"
          >
            {clicked ? "less" : "more"}
          </button>
        </div>
      ) : (
        <p>lol</p>
      )}
    </>
  );
};

export default Time;
