import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import GetResults from "./GetResults";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("Jump");
  const [definitionInfo, setDefinitionInfo] = useState(null);

  function search() {
    //   documentation at https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(url).then(handleResponse);
    return null;
  }

  function handleResponse(response) {
    setDefinitionInfo(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateSearchWord(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="card">
        <div className="card-body">
          <form
            className="form-control-lg d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Search for a word"
              onChange={updateSearchWord}
              className="input-box"
              autoFocus="on"
            />
            <input
              value="Search"
              className="shadow-sm search-button"
              type="submit"
            />
          </form>
        </div>
      </div>
      <GetResults data={definitionInfo} />
    </div>
  );
}
