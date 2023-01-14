import React, {useState} from 'react';

import DefaultTask from "./types/default_task";


import './styles/create_task.css'
import BoardTask from "./types/boardTask";
import SelectTaskType from "./selectTaskType/select_task_type";


function CreateTask(props) {


  const [display, setDisplay] = useState('typeChoice')

  let component = <div></div>

  switch (display) {
    case 'typeChoice':
      component = <SelectTaskType displaySet={setDisplay}/>
      break
    case 'defaultTask':
      component = <DefaultTask displaySet={setDisplay}/>
      break
    case 'boardTask':
      component = <BoardTask displaySet={setDisplay}/>
      break
  }

  return (
    component
  );
}

export default CreateTask;
