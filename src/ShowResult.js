import React from "react";


export default function ShowResult(props) {
 
    // let word = props.data.word;
    // let phonetic = props.data.phonetic;
    // let partOfSpeech = props.data.meanings[0].partOfSpeech;
    // let definition = props.data.meanings[0].definitions[0].definition;
    // let example = props.data.meanings[0].definitions[0].example;
  return
      <div className="ShowResult">
        <h2 className="search-word d-flex justify-content-center text-capitalize">
          {word}
        </h2>{" "}
        {phonetic}
        <div className="extra-info">
          Definition: <span className="definition">{definition}</span>
          <div className="partOfSpeech">{partOfSpeech}</div>
          Synonyms: <div className="synonyms">"hello"</div>
          example: {example}
        </div>
      </div>
    );
 
   
