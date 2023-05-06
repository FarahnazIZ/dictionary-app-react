import React, { createContext, useState } from "react";
import Header from "./Header";
import Results from "./Results";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App font-mono">
        <Header />
        <Results />
        <footer className="text-center my-5">
          <a
            href="https://github.com/FarahnazIZ/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className=" text-lime-500 hover:underline"
          >
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://curious-flan-f035bf.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className=" text-lime-500 hover:underline"
          >
            Farahnaz Izadi
          </a>
        </footer>
      </div>
    </InputContext.Provider>
  );
}

export default App;
