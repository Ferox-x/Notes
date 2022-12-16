import React, {useRef, useState} from 'react'
import './personal_task.css'
import Title from '../../attribute/title/Title'
import TaskTopic from './input_personal_task_topic/input_personal_task_topic'
import BtnProfile from '../../profile/btn_profile/btn_profile'
import FormInputs from '../../authentification/formInputs/formInputs'


function PersonalTask({create}) {

  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: ''
  })

  const addNewTask = (e) => {

  }

  return (
    <div>
      <Title title={{title: 'Личная задача'}}/>
      <div className="personal-task__create">
        <div className="personal-task__create-task">
          <TaskTopic
            onChange={e => setTask({...task, title: e.target.value})}
            value={task.title}
            placeholder="Тема задачи"
            type="text"/>
          <TaskTopic
            onChange={e => setTask({...task, description: e.target.value})}
            value={task.description}
            placeholder="Описание"
            type="text"/>
        </div>
        <div className="personal-task__add">
          <FormInputs
            onChange={e => setTask({...task, deadline: e.target.value})}
            placeholder={'Добавить дедлайн'}
            type={'date'}/>
        </div>
        <BtnProfile onClick={addNewTask}>Готово</BtnProfile>
      </div>

    </div>
  )
}

export default PersonalTask
