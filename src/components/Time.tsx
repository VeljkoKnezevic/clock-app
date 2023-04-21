import { SetStateAction, useEffect, useState } from "react";
import { GreetingEnum } from "../GreetingEnum";

type TimeProps = {
  greeting: GreetingEnum;
  setGreeting: React.Dispatch<SetStateAction<GreetingEnum>>;
};

const Time = ({ greeting, setGreeting }: TimeProps) => {
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<Date>();
  const [abbreviation, setAbbreviation] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    if (currentTime) {
      const hours = currentTime.getHours();

      if (hours >= 5 && hours < 12) {
        setGreeting(GreetingEnum.morning);
      } else if (hours >= 12 && hours < 18) {
        setGreeting(GreetingEnum.afternoon);
      } else {
        setGreeting(GreetingEnum.evening);
      }
    }
  }, [doneLoading]);

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();

        setCurrentTime(new Date(data.datetime));
        setAbbreviation(data.abbreviation);
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

    // getIp();
    getTime();
  }, []);

  return (
    <div className="ml-[26px] mt-[226px] tracking-[3px] text-white">
      <div className="flex items-center gap-4">
        <img
          src={
            greeting === GreetingEnum.evening
              ? "/desktop/icon-moon.svg"
              : "/desktop/icon-sun.svg"
          }
          alt={greeting === GreetingEnum.evening ? "Moon" : "Sun"}
        />
        <p className="text-custom font-normal uppercase leading-custom">
          Good {doneLoading && greeting}
        </p>
      </div>
      <div className="mt-4 flex items-end">
        <p className=" text-[100px]/none font-bold tracking-[-2.5px]">
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
        <p className="mb-2 ml-1 text-custom font-light leading-custom">
          {abbreviation}
        </p>
      </div>
      <p className="mt-4 text-custom font-bold uppercase leading-custom tracking-[3px]">
        in London, uk
      </p>
      <button type="button">More</button>
    </div>
  );
};

export default Time;
