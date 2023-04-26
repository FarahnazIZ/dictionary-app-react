import React from "react";

function Examples({ data }) {
  return (
    <div className="Examples">
      {data.map((value) =>
        value.meanings.map((meaning) =>
          meaning.definitions.map((props) => (
            <div key={props.example}>
              <li>{props.example}</li>
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Examples;
