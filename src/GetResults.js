import React from "react";
import Meaning from "./Meaning";
import "./GetResults.css";

export default function GetResults(props) {
  if (props.data) {
    return (
      <div className="GetResults">
        <div className="d-flex">
          <h2 className="word text-capitalize">{props.data.word}</h2>
          <span className="phonetics">{props.data.phonetic}</span>
        </div>
        <div className="definitions">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
