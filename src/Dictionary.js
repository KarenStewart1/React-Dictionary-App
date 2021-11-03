import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(word);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <form className="search-form form-control-lg" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={updateWord}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
