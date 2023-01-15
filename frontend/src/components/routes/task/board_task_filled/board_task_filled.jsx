import React from 'react';
import './board_task_filled.css'
import Back from "../../../UX/back";
import Edit from "../../../UX/edit_icon";
import Delete from "../../../UX/delete_icon";
import CheckBox from "../../../UX/CheckBox";

function BoardTaskFilled(props) {
  return (
    <div className="board-task-block">
      <div className="board-task-block__top">
        <div className="board-task-block__top-title">Ghbdtn</div>
        <Back/>
      </div>
      <div className="board-task-block-checkbox">
        <CheckBox/>
        <CheckBox/>
      </div>
      <div className="board-task-block__edit">
        <Edit/>
        <div className="board-task-block__edit-text">Редактировать задачу</div>
      </div>
      <div className="board-task-block__bottom">
        <div className="board-task-block__bottom-info">Вчера</div>
        <div
          className="board-task-block__bottom-info board-task-block__bottom-date">10.20.2022
        </div>
        <div className="board-task-block__bottom-delete">
          <Delete/>
          <div

            className="board-task-block__bottom-info board-task-block__bottom-delete-task">
            Удалить задачу
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardTaskFilled;
