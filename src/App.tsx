import { useState } from "react";
import Time from "./components/Time";
import Quote from "./components/Quote";
import { Greeting } from "./GreetingEnum";

const App = () => {
  const [greeting, setGreeting] = useState<Greeting>("");

  return (
    <main className="">
      <Quote />
      <Time greeting={greeting} setGreeting={setGreeting} />
    </main>
  );
};

export default App;
