import React from 'react';
import './task_completed.css'
import Back from "../../../UX/back";
import Delete from "../../../UX/delete_icon";
import Edit from "../../../UX/edit_icon";

function TaskCompleted({data, deadline, status, type, ...props}) {
  return (
    <div className="task-block">
      <div className="task-block__top">
        <div className="task-block__top-title">{data.title}</div>
        <Back/>
      </div>
      <div className="task-block__text">{data.description}
      </div>
      <div className="task-block__edit">
        <Edit/>
        <div className="task-block__edit-text">Редактировать задачу</div>
      </div>
      <div className="task-block__bottom">
        <div className="task-block__bottom-info">Вчера</div>
        <div
          className="task-block__bottom-info task-block__bottom-date">{deadline}
        </div>
        <div className="task-block__bottom-delete">
          <Delete/>
          <div
            className="task-block__bottom-info task-block__bottom-delete-task">
            Удалить задачу
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCompleted;
