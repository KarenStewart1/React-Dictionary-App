import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.imageData) {
    return (
      <div className="Images">
        <div className="card images">
          <div className="card-body">
            <div className="row">
              {props.imageData.map(function (photos, index) {
                return (
                  <div className="col-md-4" key={index}>
                    <a
                      href={photos.src.original}
                      target="_blank"
                      rel="noreferrer"
                      title="go to original image"
                    >
                      <img
                        src={photos.src.landscape}
                        className="img-fluid photos shadow-sm"
                        alt="word searched"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
