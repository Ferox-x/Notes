import React, {useState} from 'react'
import './task.css'
import Title from '../../UX/title'


function Task() {
    const [tasks, setTasks] = useState([

    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    return (
        <div>
            <Title title={'Задачи'}/>



        </div>
    )
}

export default Task
