import { useState } from "react";
import Time from "./components/Time";
import Quote from "./components/Quote";
import { Greeting } from "./GreetingEnum";
import "./styles/styles.scss";
import Popup from "./components/Popup";
import { TimeData } from "./FetchProps";

const App = () => {
  const [greeting, setGreeting] = useState<Greeting>("");
  const [clicked, setClicked] = useState(false);
  const [timeData, setTimeData] = useState<TimeData>();

  return (
    <main className={`main ${greeting === "Evening" ? "night" : "day"}`}>
      <Quote clicked={clicked} />
      <Time
        clicked={clicked}
        setClicked={setClicked}
        greeting={greeting}
        setGreeting={setGreeting}
        setTimeData={setTimeData}
        timeData={timeData}
      />
      {clicked ? <Popup greeting={greeting} timeData={timeData} /> : ""}
    </main>
  );
};

export default App;
