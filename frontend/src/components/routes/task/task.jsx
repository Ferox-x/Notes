import React, {useState} from 'react'
import './task.css'
import {getTasks} from '../../../actions/task_services'
import Title from '../../UX/title'
import TaskCompleted from './task_completed/task_completed'


function Task() {
  const [tasks, setTasks] = useState([])

  getTasks().then(tasks => {
    setTasks(tasks)
  })

  return (
    <div>
      <Title title={'Задачи'}/>
      {tasks.map(task =>
        <TaskCompleted
          status={task.status}
          type={task.type}
          deadline={task.deadline}
          data={task.data}
        />
      )}
    </div>
  )
}

export default Task
