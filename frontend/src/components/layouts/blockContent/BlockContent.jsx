import React from "react";
import './BlockContent.css';

function BlockContent (props) {
  return(
    <section className="empty-content-block">
      <div className="content-block-title">
        <p className="content-block-title__text">{props.block.title}</p>
      </div>
      <div className="content-block-area">
        <p className="content-block-area__text">{props.block.area_text}</p>
      </div>
    </section>
  )
}

export default BlockContent;
