import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.partOfSpeech}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div>
            <div key={index}>Definition: {definition.definition}</div>
            <br />
            <div key={index}>Example: {definition.example}</div>
            <br />
            <div key={index}>synonyms: {definition.synonyms}</div>
          </div>
        );
      })}
    </div>
  );
}
