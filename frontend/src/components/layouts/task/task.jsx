import React from "react";
import './task.css'
import Title from "../title/Title";
import BlockContent from "../blockContent/BlockContent";

function Task() {
  return (
    <div>
      <Title title={{title: 'Задачи'}}/>
      <BlockContent block={{
        title: 'Сегодня', area_text: 'Здесь появятся ваши сегодняшние задачи'
      }}/>
      <BlockContent block={{
        title: 'В этом месяце',
        area_text: 'Здесь появятся ваши задачи в этом месяце'
      }}/>

    </div>
  )
}

export default Task;
