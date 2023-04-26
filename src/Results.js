import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InputContext } from "./App";
import Definitions from "./Definitions";

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
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-center mt-10">No results have been found.</h3>;
  }

  return (
    <div className="Results">
      <div className="container mx-auto p-4 max-w-2xl">
        {response && (
          <div>
            <h3 className="font-bold mt-4">Definitions:</h3>
            <Definitions />
            <h3 className="font-bold mt-4">Examples:</h3>
            <h3 className="font-bold mt-4">Synonyms:</h3>
            <h3 className="font-bold mt-4">Antonyms:</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
