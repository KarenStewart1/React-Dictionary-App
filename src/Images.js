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
                  <div className="col-4">
                    <img
                      src={photos.src.landscape}
                      className="img-fluid photos"
                      key={index}
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
