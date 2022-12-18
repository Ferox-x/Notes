import React, {useState} from 'react';

import Title from "../../../UX/title";
import Back from "../../../UX/back";
import Input from "../../../UX/input";
import Button from "../../../UX/button";
import CheckboxInput from "../../../UX/checkboxInput";
import AddSubtask from "../add_subtask/add_subtask";


function BoardTask(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [subtasks,setSubtasks] = useState([])

  return (
    <div className={"create-task-container"}>
      <div className="create-task-title">
        <Title
          title={'Личная задача'}
        />
        <Back/>
      </div>
      <div className="create-task-form">
        <Input
          style={{
            marginBottom: '20px'
          }}
          placeholder={'Тема задачи'}
          setValue={setTitle}
        />
        <CheckboxInput
          style={{
            marginBottom: '30px'
          }}
          children={'Подзадача'}
        />
        <Input
          style={{
            marginBottom: '30px'
          }}
          type={'date'}
          setValue={setDate}
        />
        <AddSubtask
          setValue={setSubtasks}
          value={subtasks}

        />
      </div>
      <Button
        children={'Создать'}
      />
    </div>

  );
}

export default BoardTask;
