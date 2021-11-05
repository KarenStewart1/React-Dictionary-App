import React from "react";
import Meaning from "./Meaning";
import "./GetResults.css";
import Images from "./Images";
import Audio from "./Audio";

export default function GetResults(props) {
  if (props.data) {
    return (
      <div className="GetResults">
        <div className="card">
          <div className="card-body">
            <div className="first-box d-flex">
              <h2>{props.data.word}</h2>
              <span className="phonetics text-muted">
                {props.data.phonetic}
              </span>
            </div>
            <Audio audio={props.data.phonetics[0].audio} />
          </div>
        </div>
        <div className="definitions ">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
        </div>
        <Images imageData={props.imageData} />
      </div>
    );
  } else {
    return null;
  }
}
