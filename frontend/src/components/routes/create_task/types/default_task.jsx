import React, {useState} from 'react';
import {DefaultTaskClass} from '../../../../actions/task_services'

import Title from "../../../UX/title";
import Back from "../../../UX/back";
import Input from "../../../UX/input";
import Button from "../../../UX/button";


function DefaultTask({displaySet, createNotice, ...props}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

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
          placeholder={'Тема задачи'}
          value={title}
          setValue={setTitle}
        />
        <Input
          style={{
            marginBottom: '20px'
          }}
          value={description}
          placeholder={'Описание'}
          setValue={setDescription}
        />
        <Input
          type={'date'}
          value={date}
          setValue={setDate}
        />
      </div>
      <Button
        onClick={()=> {
          new DefaultTaskClass(title, description, date).sendTask()
          createNotice(Date.now(), 'Задача успешно создана.', 'green')
          setTitle('')
          setDate('')
          setDescription('')
        }}
        children={'Создать'}
      />
    </div>

  );
}

export default DefaultTask;
