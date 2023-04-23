import { useState } from "react";
import Time from "./components/Time";
import Quote from "./components/Quote";
import { Greeting } from "./GreetingEnum";
import "./styles/styles.scss";
import Popup from "./components/Popup";

const App = () => {
  const [greeting, setGreeting] = useState<Greeting>("");
  const [clicked, setClicked] = useState(false);
  const [timezone, setTimezone] = useState("");
  const [dayOfTheYear, setDayOfTheYear] = useState(0);
  const [dayOfTheWeek, setDayOfTheWeek] = useState(0);
  const [weekNumber, setWeekNumber] = useState(0);

  return (
    <main className={`main ${greeting === "Evening" ? "night" : "day"}`}>
      <Quote clicked={clicked} />
      <Time
        clicked={clicked}
        setClicked={setClicked}
        greeting={greeting}
        setGreeting={setGreeting}
        setTimezone={setTimezone}
        setDayOfTheYear={setDayOfTheYear}
        setDayOfTheWeek={setDayOfTheWeek}
        setWeekNumber={setWeekNumber}
      />
      {clicked ? (
        <Popup
          greeting={greeting}
          timezone={timezone}
          dayOfTheYear={dayOfTheYear}
          dayOfTheWeek={dayOfTheWeek}
          weekNumber={weekNumber}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
