import React from "react";
import './project.css';
import Title from "../title/Title";
import BlockContent from "../blockContent/BlockContent";

function Project() {
  return (
    <div>
      <Title title={{title: 'Проекты'}}/>
      <BlockContent block={{
        area_text: 'Здесь появятся ваши проекты'
      }}/>
    </div>
  )
}

export default Project;
