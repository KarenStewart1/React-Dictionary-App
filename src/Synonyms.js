import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.data);
  if (props.data.length) {
    return (
      <div className="synonyms">
        <strong>Synonyms</strong>: {props.data.join(", ")}
      </div>
    );
  } else {
    return null;
  }
}
