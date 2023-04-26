import React from "react";

function Definitions({ data }) {
  return (
    <div className="Definitions">
      {data.map((value) =>
        value.meanings.map((meaning) =>
          meaning.definitions.map((props) => (
            <div key={props.definition}>
              <li>{props.definitions}</li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Definitions;
