import React, {useState} from 'react';

import Title from "../../../UX/title";
import Back from "../../../UX/back";
import Input from "../../../UX/input";
import Button from "../../../UX/button";


function DefaultTask({displaySet, ...props}) {
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
          setValue={setDate}
        />
      </div>
      <Button
        children={'Создать'}
      />
    </div>

  );
}

export default DefaultTask;
