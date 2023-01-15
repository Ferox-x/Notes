import React, {useEffect, useState} from 'react'
import './task.css'
import {getTasks} from '../../../actions/task_services'
import Title from '../../UX/title'
import TaskCompleted from './task_completed/task_completed'


function Task() {

  const [tasks, setTasks] = useState([])
  useEffect(()=> {
    fetchTasks()
  }, [])
  async function fetchTasks () {
    const tasks =  await getTasks()
    setTasks(tasks)
  }


  return (
    <div>
      <Title title={'Задачи'} style={{padding: '20px'}}/>
      <div className="tasks">
        {tasks.map(task =>
        <TaskCompleted
          key={task.id}
          id={task.id}
          status={task.status}
          type={task.type}
          deadline={task.deadline}
          data={task.data}
          value={tasks}
          setValue={setTasks}
        />
      )}
      </div>
    </div>
  )
}

export default Task
