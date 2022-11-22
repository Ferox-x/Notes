import React from "react";
import './Title.css';

function Title(props) {
  return (
    <section className="page-title">
      <p className="page-title__text">{props.title.title}</p>
    </section>
  )
}

export default Title;
