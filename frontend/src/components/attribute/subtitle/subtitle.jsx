import React from "react";
import './subtitle.css'

function Subtitle(props) {
  return (
    <div className="content-block-title">
      <p className="content-block-title__text">{props.subtitle.text}</p>
    </div>
  )
}

export default Subtitle;
