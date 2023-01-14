import React from 'react';
import './notification_filled.css'
import TeamIcon from "../../../UX/team-icon";

function NotificationFilled(props) {
  return (
    <div className="notification-block">
      <div className="notification-block__sender">
        <div className="notification-block__sender-text">Ксения назначает вам
          задачу
        </div>
        <TeamIcon/>
      </div>
      <div className="notification-block__task-name">Математический анализ
      </div>
      <div className="notification-block__date">07/10/2022</div>

    </div>
  );
}

export default NotificationFilled;
