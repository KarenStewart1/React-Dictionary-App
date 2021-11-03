import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <em className="example">{definition.example}</em>
            <div className="synonyms">{definition.synonyms}</div>
          </div>
        );
      })}
    </div>
  );
}
