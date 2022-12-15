import React from 'react'
import './input_personal_task_topic.css'

const TaskTopic = React.forwardRef((props, ref) => {
    return(
        <input ref={ref} className="personal-task__create-topic" {...props}/>
    )
})

export default TaskTopic
