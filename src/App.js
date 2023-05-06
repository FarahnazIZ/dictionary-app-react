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
      </div>
    </InputContext.Provider>
  );
}

export default App;
