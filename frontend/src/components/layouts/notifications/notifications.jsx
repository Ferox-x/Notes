import React from "react";
import Title from "../title/Title";
import BlockContent from "../blockContent/BlockContent";


function Notifications() {
  return(
    <div>
      <Title title={{title: 'Уведомления'}}/>
      <BlockContent block={{
        area_text: 'Создайте свой первый проект и получайте уведомления!'
      }}/>
    </div>
  )
}

export default Notifications;
