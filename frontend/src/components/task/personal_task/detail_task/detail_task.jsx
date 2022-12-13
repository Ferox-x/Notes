import React from 'react';
import './detail_task.css';

function DetailTask(props) {
  return (
    <div className={'detail-task-container'}>
      <div className={'detail-task-container__top'}>
        <div className={'detail-task-container__title'}>{props.task.title}
        </div>
        <div className={'detail-task-container__back'}></div>
      </div>
      <div className={'detail-task-container__middle'}>
        <div className={'detail-task-container__text'}>
          {props.task.description}
        </div>
      </div>
      <div className={'detail-task-container__bottom'}>
        <div className={'detail-task-container__edit'}>
          <div className={'detail-task-container__edit__text'}>Редактировать задачу</div>
        </div>
        <div className={'detail-task-container__info'}>
          <div className={'detail-task-container__info__dow'}>Вчера</div>
          <div className={'detail-task-container__info__dow detail-task-container__info__date'}>31/12/2022</div>
          <div className={'detail-task-container__info__dow detail-task-container__info__delete'}>Удалить задачу</div>
        </div>

      </div>


    </div>
  );
}

export default DetailTask;
