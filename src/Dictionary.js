import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import GetResults from "./GetResults";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState(null);
  const [definitionInfo, setDefinitionInfo] = useState(null);
  const [photos, setPhotos] = useState(null);
  let imageApiKey = `563492ad6f91700001000001edd29bc9babf4aca9c6ccfe42977685f`;
  let imageUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
  let headers = { Authorization: `Bearer ${imageApiKey}` };

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //   documentation at https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(url).then(handleResponse);
    axios.get(imageUrl, { headers: headers }).then(handleImageResponse);
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
    <div className="Dictionary">
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
      <GetResults data={definitionInfo} imageData={photos} />
    </div>
  );
}
