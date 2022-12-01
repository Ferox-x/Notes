import React from "react";
import './validation_title.css';

function ValidationTitle(props) {
  return(
    <div className="page-title-login">
      <p className="page-title-login__text">{props.title.val_title}</p>
    </div>
  )
}

export default ValidationTitle;
