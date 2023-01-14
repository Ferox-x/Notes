import React, {useState} from 'react';
import './select_task_type.css'
import Title from "../../../UX/title";
import CheckboxType from "../../../UX/checkboxType";

function SelectTaskType({displaySet, ...props}) {

  return (
    <div className={'personal-task-select'}>
      <Title style={{padding: '20px'}} title={'Личная задача'}/>
      <div className="personal-task-select__type">
        <div className="personal-task-select__task">Выбор задачи</div>
        <div className="personal-task-select__type-task">
          <div className="personal-task-select__type-task-note">
            <CheckboxType
              title={'Заметка'}
              displaySet={displaySet}
              displayValue={'defaultTask'}
            />
            <div className="personal-task-select__type-task-check-text">
              Стандартная форма для создания личной заметки. Добавьте описание
              и дедлайн к вашей задаче!
            </div>
          </div>
          <div className="personal-task-select__type-task-note">
            <CheckboxType
              title={'Доска маленьких задач'}
              displaySet={displaySet}
              displayValue={'boardTask'}
            />
            <div className="personal-task-select__type-task-check-text">
              Создается задача у которой есть название, время, прогресс задачи
              (кол-во процентов от выполненых маленьких задач)
            </div>
          </div>

        </div>
      </div>

    </div>


  )
    ;
}

export default SelectTaskType;
