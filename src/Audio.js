import React from "react";

export default function Audio(props) {
  return (
    <a href={props.audio} target="_blank" rel="noreferrer">
      <button className="audio-button">
        <i className="far fa-play-circle"></i>
      </button>
    </a>
  );
}
