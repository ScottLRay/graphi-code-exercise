import React from "react";


function cards({ details, image, title, article }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {details}
        </p>
        <a href={article} className="btn btn-primary">
          Link to the article
        </a>
      </div>
    </div>
  );
}

export default cards;


