import React from "react";

function Synonyms({ data }) {
  return (
    <div className="Synonyms">
      <div className="columns-2 md:columns-3">
        {data.map((value) =>
          value.meanings.map((props) => {
            return props.synonyms?.map((synonym) => <li>{synonym}</li>);
          })
        )}
      </div>
    </div>
  );
}

export default Synonyms;
