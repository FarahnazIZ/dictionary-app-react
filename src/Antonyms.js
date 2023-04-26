import React from "react";

function Antonyms({ data }) {
  return (
    <div className="Antonyms">
      <div className="columns-2 md:columns-3">
        {data.map((value) =>
          value.meanings.map((props) => {
            return props.antonyms?.map((antonym) => <li>{antonym}</li>);
          })
        )}
      </div>
    </div>
  );
}

export default Antonyms;
