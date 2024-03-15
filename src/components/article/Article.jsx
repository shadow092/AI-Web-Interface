import React from "react";

import "./article.css";
const Article = (props) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{props.date}</p>
          <h3> {props.text} </h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
