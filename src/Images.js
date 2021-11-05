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
                  <div className="col-4" key={index}>
                    <img
                      src={photos.src.landscape}
                      className="img-fluid photos"
                      alt="word searched"
                    />
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
