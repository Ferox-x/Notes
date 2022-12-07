import React from "react";
import './personal_task.css';
import Title from "../../attribute/title/Title";
import TaskTopic from "./input_personal_task_topic/input_personal_task_topic";
import BtnProfile from "../../profile/btn_profile/btn_profile";
import FormInputs from "../../authentification/formInputs/formInputs";


function PersonalTask() {

  return (
    <div>
      <Title title={{title: 'Личная задача'}}/>
      <div className="personal-task__create">
        <div className="personal-task__create-task">
          <TaskTopic placeholder={'Тема задачи'} type={'text'}/>
          <TaskTopic placeholder={'Описание'} type={'text'}/>
        </div>
        <div className="personal-task__add">
          <FormInputs placeholder={'Добавить дедлайн'}
                      type={'date'}/>
        </div>
        <BtnProfile button={{text: 'Готово'}}/>
      </div>

    </div>
  )
}

export default PersonalTask;
