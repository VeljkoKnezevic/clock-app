import { useEffect, useState } from "react";
import Time from "./components/Time";
import Quote from "./components/Quote";
import { Greeting } from "./GreetingEnum";
import "./styles/styles.scss";

const App = () => {
  const [greeting, setGreeting] = useState<Greeting>("");

  useEffect(() => {}, []);

  return (
    <main className={`main ${greeting === "Evening" ? "night" : "day"}`}>
      <Quote />
      <Time greeting={greeting} setGreeting={setGreeting} />
    </main>
  );
};

export default App;
