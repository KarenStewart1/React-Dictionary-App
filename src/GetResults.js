import React from "react";
import Meaning from "./Meaning";
import "./GetResults.css";
import Images from "./Images";

export default function GetResults(props) {
  if (props.data) {
    return (
      <div className="GetResults">
        <div className="card">
          <div className="card-body">
            <div className="first-box d-flex">
              <h2 className="word d-flex text-capitalize">{props.data.word}</h2>
              <span className="phonetics">{props.data.phonetic}</span>
            </div>
            <button>
              <i class="far fa-play-circle"></i>
            </button>
          </div>
        </div>
        <div className="definitions ">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="card shadow-sm">
                <div className="card-body">
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
        </div>
        <Images />
      </div>
    );
  } else {
    return null;
  }
}
