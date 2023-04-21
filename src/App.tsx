import { useState } from "react";
import "./App.css";
import Time from "./components/Time";
import Quote from "./components/Quote";
import { GreetingEnum } from "./GreetingEnum";

const App = () => {
  const [greeting, setGreeting] = useState<GreetingEnum>(GreetingEnum.empty);

  return (
    <main
      className={`day-tint h-screen w-screen bg-cover ${
        greeting === GreetingEnum.evening ? "bg-nightSmall" : "bg-daySmall"
      }  bg-no-repeat font-inter`}
    >
      <Quote />
      <Time greeting={greeting} setGreeting={setGreeting} />
    </main>
  );
};

export default App;
