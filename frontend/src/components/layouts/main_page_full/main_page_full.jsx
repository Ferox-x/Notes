import React from "react";
import './main_page_full.css'
import Title from "../title/Title";
import BlockContentFilled from "../block_content_filled/block_content_filled";

function MainPageFull() {
  return (
    <div>
      <Title title={{title: 'Задачи'}}/>
      <BlockContentFilled info={{title: 'Дизайн-макет прилож...', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
      <BlockContentFilled info={{title: 'Дизайн-макет прилож...', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
      <BlockContentFilled info={{title: 'Дизайн-макет прилож...', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
    </div>

  )
}

export default MainPageFull;
