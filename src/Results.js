import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InputContext } from "./App";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

axios.defaults.baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

function Results() {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (parameter) => {
    try {
      setLoading(true);
      const information = await axios(`/${parameter}`);
      setResponse(information.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    );
  }

  if (error) {
    return <h3 className="text-center mt-10">No results have been found.</h3>;
  }

  return (
    <div className="Results">
      <div className="container mx-auto p-4 max-w-2xl">
        {response && (
          <div>
            <h3 className="font-bold mt-4 mb-1 text-lg">Definitions:</h3>
            <Definitions data={response} />
            <h3 className="font-bold mt-4 mb-1 text-lg">Synonyms:</h3>
            <Synonyms data={response} />
            <h3 className="font-bold mt-4 mb-1 text-lg">Antonyms:</h3>
            <Antonyms data={response} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
