import React from "react";

export default function Audio(props) {
  return (
    <div className="Audio">
      <a href={props.audio} target="_blank" rel="noreferrer">
        <button className="audio-button" title="Listen">
          <i className="far fa-play-circle"></i>
        </button>
      </a>
    </div>
  );
}
