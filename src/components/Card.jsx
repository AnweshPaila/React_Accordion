import React from "react";
import "./Card.css";

const Card = ({ profileSrc, socailsrc, cardTitle, cardText }) => {
  return (
    <>
      <div
        className="card profile-card-2 ml-2"
        style={{ width: "15em", height: "15em" }}
      >
        <div className="card-img-block">
          <img className="img-fluid" src={profileSrc} alt="Card cap" />
        </div>
        <div className="card-body pt-3">
          <img src={socailsrc} alt="profile" className="profile" />
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
