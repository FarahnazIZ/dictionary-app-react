import React from "react";

function Header() {
  return (
    <div className="Header">
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold">Dictionary</h1>
        <h3 className="mt-1">Find the definition of a word</h3>
        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 rounded">
            <input
              type="text"
              placeholder="Type a word"
              className="px-4 py-2 md:w-80"
            />
            <button className="bg-blue-400 rounded border-l px-4 py-2">
              Search
            </button>
          </div>
        </div>
        <h2>Word</h2>
      </div>
    </div>
  );
}

export default Header;
