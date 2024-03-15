import React from "react";

import image from "../../assets/possibility.png";
import "./possibility.css";

const possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={image} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Requset Early Accesss to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilitys are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Requset Early Accesss to Get Started</h4>
      </div>
    </div>
  );
};

export default possibility;
