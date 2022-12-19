import React, {useState} from 'react';

import DefaultTask from "./types/default_task";


import './styles/create_task.css'


function CreateTask(props) {


  const [display, setDisplay] = useState(0)

  let component = <div></div>

  switch (display) {
    case 'typeChoice':
      break
    case 'defaultTask':
      component = <DefaultTask/>
      break
    case 'boardTask.jsx':
      break
  }

  return (
    component
  );
}

export default CreateTask;
