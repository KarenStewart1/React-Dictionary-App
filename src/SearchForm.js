import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a word here..." autoFocus="on" />
      <button className="btn btn-primary" onClick={handleClick}>
        Search
      </button>
    </form>
  );
}
