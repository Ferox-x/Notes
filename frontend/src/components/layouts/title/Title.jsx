import React from "react";
import './Title.css';

function Title(props) {
  return (
    <div>
      <section className="page-title">
        <p className="page-title__text">{props.title.title}</p>
      </section>
    </div>

  )
}

export default Title;
