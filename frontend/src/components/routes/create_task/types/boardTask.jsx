import React, {useState} from 'react';

import AddSubtask from "../add_subtask/add_subtask";

import Title from "../../../UX/title";
import Back from "../../../UX/back";
import Input from "../../../UX/input";
import Button from "../../../UX/button";
import SubTasksList from "../subTasksList/subTasksList";

import {BoardTaskClass} from '../../../../actions/task_services'

function BoardTask({displaySet, ...props}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [subtasks, setSubtasks] = useState([])

  const addNewSubtask = (e) => {
    const newSubtask = {
      id: Date.now(),
      subTitle: ''
    }
    setSubtasks([...subtasks, newSubtask])
  }

  function sendSubTasks() {
    new BoardTaskClass(title, date, subtasks).sendTask()
  }

  return (
    <div className={"create-task-container"}>
      <div className="create-task-title">
        <Title
          title={'Личная задача'}
        />
        <Back
          displaySet={displaySet}
          displayValue={'typeChoice'}
        />
      </div>
      <div className="create-task-form">
        <Input
          style={{
            marginBottom: '20px'
          }}
          type={'text'}
          placeholder={'Тема задачи'}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          style={{
            marginBottom: '30px'
          }}
          value={date}
          setValue={setDate}
          type={'date'}
        />
        <SubTasksList
          setValue={setSubtasks}
          subtasks={subtasks}
        />
        <AddSubtask
          onclick={addNewSubtask}
        />
      </div>
      <Button
        children={'Создать'}
        onClick={sendSubTasks}
      />
    </div>

  );
}

export default BoardTask;
