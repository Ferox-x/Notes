import moment from 'moment'
import React from 'react';
import './task_completed.css'
import {deleteTask} from '../../../../actions/task_services'
import {
  createNoticeServices
} from '../../../../services/notifications_services'
import Back from "../../../UX/back";
import Delete from "../../../UX/delete_icon";
import Edit from "../../../UX/edit_icon";

function TaskCompleted({createNotice, data, deadline, status, type, id, value, setValue, ...props}) {

  function removeTask () {
    deleteTask(id)
    setValue(value.filter(task => task.id !== id))
    createNoticeServices(createNotice, 'Задача успешно удалена.', 'green')
  }
  const date = moment(deadline).format('L')

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
          className="task-block__bottom-info task-block__bottom-date">{date}
        </div>
        <div className="task-block__bottom-delete">
          <Delete/>
          <div
            onClick={removeTask}
            className="task-block__bottom-info task-block__bottom-delete-task">
            Удалить задачу
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCompleted;
