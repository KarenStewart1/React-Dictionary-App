import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import ShowResult from "./ShowResult";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState(null);
  let [definitionInfo, setDefinitionInfo] = useState(null);

  function search() {
    //   documentation at https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(url).then(handleResponse);
    return null;

  function handleResponse(response) {
    setDefinitionInfo({
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
      partOfSpeech: response.data[0].meanings[0].partOfSpeech,
      definition: response.data[0].meanings[0].definitions[0].definition,
      synonym: response.data[0].meanings[0].definitions[0].synonyms[0],
      example: response.data[0].meanings[0].definitions[0].example,
    });
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
      <form className="search-form form-control-lg" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={updateSearchWord}
        />
      </form>
      <ShowResult data={definitionInfo} />
    </div>
  );
          <input
            value="Search"
            className="shadow-sm search-button"
            type="submit"
          />
        <ShowResult data={definitionInfo} />
}
