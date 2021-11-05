import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms</strong>: {props.data.join(", ")}
      </div>
    );
  } else {
    return null;
  }
}
