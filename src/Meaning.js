import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div>
            <div key={index}>{definition.definition}</div>
            <br />
            <em key={index}>{definition.example}</em>
            <br />

            <div key={index}>{definition.synonyms}</div>
          </div>
        );
      })}
    </div>
  );
}
