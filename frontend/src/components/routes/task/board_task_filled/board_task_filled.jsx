import moment from 'moment'
import React from 'react'
import './board_task_filled.css'
import {deleteTask} from '../../../../actions/task_services'
import Back from '../../../UX/back'
import Edit from '../../../UX/edit_icon'
import Delete from '../../../UX/delete_icon'
import CheckBox from '../../../UX/CheckBox'

function BoardTaskFilled({
  boardTasks,
  title,
  deadline,
  status,
  type,
  id,
  value,
  setValue,
  ...props
}) {

  function removeTask() {
    deleteTask(id)
    setValue(value.filter(task => task.id !== id))
  }

  const date = moment(deadline).format('L')
  console.log(boardTasks)
  return (
    <div className="board-task-block">
      <div className="board-task-block__top">
        <div className="board-task-block__top-title">{title}</div>
        <Back/>
      </div>
      <div className="board-task-block-checkbox">
        {boardTasks.map((task) => {
            return <CheckBox
              key={task.id}
              id={task.id}
              title={task.subTitle}
            />
          }
        )}
      </div>
      <div className="board-task-block__edit">
        <Edit/>
        <div className="board-task-block__edit-text">Редактировать задачу</div>
      </div>
      <div className="board-task-block__bottom">
        <div className="board-task-block__bottom-info">Вчера</div>
        <div
          className="board-task-block__bottom-info board-task-block__bottom-date">{date}
        </div>
        <div className="board-task-block__bottom-delete">
          <Delete/>
          <div
            onClick={removeTask}
            className="board-task-block__bottom-info board-task-block__bottom-delete-task">
            Удалить задачу
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardTaskFilled
