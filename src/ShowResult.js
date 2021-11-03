import React from "react";
import "./ShowResult.css";

export default function ShowResult(props) {
  return (
    <div className="ShowResult">
      <h2 className="searchWord text-capitalize">{props.data.word}</h2>
      <div className="definition">{props.data.definition}</div>
      <div className="partOfSpeech">{props.data.partOfSpeech}</div>
    </div>
  );
}
