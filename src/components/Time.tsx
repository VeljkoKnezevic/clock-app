import { useEffect, useState } from "react";
import Ipbase from "@everapi/ipbase-js";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
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
        console.log(data.location.city.name);
        console.log(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };

    getIp();
    getTime();
  }, []);

  return (
    <div className="">
      <p>Good morning</p>
      <p>{currentTime}</p>
      <p>in {timezone}</p>
    </div>
  );
};

export default Time;
