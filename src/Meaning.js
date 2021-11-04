import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <em className="example text-muted">{definition.example}</em>
            </div>
            <Synonyms data={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
