import React from 'react';
import './task_completed.css'
import Back from "../../../UX/back";
import Delete from "../../../UX/delete_icon";
import Edit from "../../../UX/edit_icon";

function TaskCompleted(props) {
  return (
    <div className="task-block">
      <div className="task-block__top">
        <div className="task-block__top-title">Дизайн-макет приложения</div>
        <Back/>
      </div>
      <div className="task-block__text">Делаем пока вариант сайта с разделами
        "о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        "о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        "о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        "о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        "о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим"о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим
        позже.о препарате" и с двумя видеовизитами. Лендинг и видеоинтервью
        добавим




      </div>
      <div className="task-block__edit">
        <Edit/>
        <div className="task-block__edit-text">Редактировать задачу</div>
      </div>
      <div className="task-block__bottom">
        <div className="task-block__bottom-info">Вчера</div>
        <div
          className="task-block__bottom-info task-block__bottom-date">31/12/2022
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
