import React from "react";

export default function Audio(props) {
  return (
    <button>
      <a href={props.audio} target="_blank" rel="noreferrer">
        <i className="far fa-play-circle"></i>
      </a>
    </button>
  );
}
