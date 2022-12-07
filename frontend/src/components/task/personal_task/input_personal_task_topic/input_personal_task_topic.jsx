import React from "react";
import './input_personal_task_topic.css'

function TaskTopic(props) {
  return(
    <input className="personal-task__create-topic" type={props.type}
           placeholder={props.placeholder}/>
  )
}

export default TaskTopic;
