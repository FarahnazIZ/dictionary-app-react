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
    <div className="Header bg-gradient-to-r from-lime-100 via-lime-200 to-lime-100">
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold">Dictionary</h1>
        <p className="mt-1 italic">Find the definition of a word</p>
        <div className="flex items-center justify-center mt-5">
          <form className="flex rounded shadow-sm">
            <input
              type="search"
              placeholder="Type a word"
              className="px-4 py-2 border-2 md:w-80"
              onChange={handleInput}
              value={value}
            />
            <button
              type="submit"
              className="bg-lime-400 rounded border-2 border-lime-400 px-4 py-2 hover:bg-lime-200"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </div>
        {inputValue && (
          <div className="container mx-auto py-8 text-center">
            <div className="flex items-center justify-center">
              <h2 className="mt-5 font-bold text-xl capitalize bg-lime-500 py-3 px-32 rounded shadow-md md:w-72">
                {inputValue}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
