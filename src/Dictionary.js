import React, { useState } from "react";
import "./Dictionary.css";
import ShowResult from "./ShowResult";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState(null);
  let [definitionInfo, setDefinitionInfo] = useState(null);

  function handleResponse(response) {
    setDefinitionInfo(response);
    console.log(definitionInfo);
    return null;
  }

  function search() {
    //   documentation at https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(url).then(handleResponse);
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchWord);
    search();
  }
  function updateSearchWord(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <form className="search-form form-control-lg" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={updateSearchWord}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <ShowResult data={definitionInfo} />
    </div>
  );
}
