import React, { useContext, useState } from "react";
import { InputContext } from "./App";

function Header() {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInput = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="Header">
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold">Dictionary</h1>
        <h3 className="mt-1">Find the definition of a word</h3>
        <div className="flex items-center justify-center mt-5">
          <form className="flex border-2 rounded">
            <input
              type="search"
              placeholder="Type a word"
              className="px-4 py-2 md:w-80"
              onChange={handleInput}
              value={value}
            />
            <button
              type="submit"
              className="bg-blue-400 rounded border-l px-4 py-2"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
        {inputValue && (
          <h2 className="mt-10 font-bold text-xl">{inputValue}</h2>
        )}
      </div>
    </div>
  );
}

export default Header;
