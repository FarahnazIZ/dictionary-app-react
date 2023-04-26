import React from "react";

function Synonyms({ data }) {
  return (
    <div className="Synonyms">
      {data.map((value) =>
        value.meanings.map((props) => {
          return props.synonyms?.map((synonym) => <li>{synonym}</li>);
        })
      )}
    </div>
  );
}

export default Synonyms;
