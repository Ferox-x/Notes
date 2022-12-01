import {Component} from "react";
import './main_page.css';
import BlockContent from "../blockContent/BlockContent";
import Title from "../title/Title";

function MainPage() {
  return (
    <div>
      <Title title={{title: 'Главная'}}/>
      <BlockContent block={{
        title: 'Недавние задачи', area_text: 'Здесь появятся ваши недавние\n' +
          '          задачи'
      }}/>
      <BlockContent block={{
        title: 'Ближайшие дедлайны',
        area_text: 'Создайте первую задачу и добавьте дедлайн!'
      }}/>
    </div>

  )
}

export default MainPage;


