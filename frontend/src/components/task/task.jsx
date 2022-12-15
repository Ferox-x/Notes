import React, {useState} from 'react'
import './task.css'
import Title from '../attribute/title/Title'
import TaskList from './personal_task/taskList/TaskList'
import PersonalTask from './personal_task/personal_task'

function Task() {
    const [tasks, setTasks] = useState([

    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    return (
        <div>
            <Title title={{title: 'Задачи'}}/>

            <PersonalTask create={createTask}/>
            <TaskList tasks={tasks}/>


        </div>
    )
}

export default Task
