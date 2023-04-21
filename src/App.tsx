import { useEffect, useState } from "react";
import "./App.css";
import Time from "./components/Time";
import Quote from "./components/Quote";

const App = () => {
  return (
    <main>
      <Quote />
      <Time />
    </main>
  );
};

export default App;
