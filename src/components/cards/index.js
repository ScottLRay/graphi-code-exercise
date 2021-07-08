import React from 'react';

function cards(props) {
    return(
        <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"></p>
  </div>
  </div>
    )
    }

    export default cards