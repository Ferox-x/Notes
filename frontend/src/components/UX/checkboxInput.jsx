import React, {useState} from 'react'
import Input from './input'
import styles from  './styles/checkboxInput.module.css'


function CheckboxInput({index, ...props}) {

  const [subTask, setSubTask] = useState('')

  return (
    <div>
      <div className={styles.customCheckbox}></div>
      <Input
        style={{
          marginBottom: '20px'
        }}
        name={'subtask' + index}
        type={'text'}
        placeholder={'Подзадача'}
        value={subTask}
        onChange={e => setSubTask(e.target.value)}
      />
    </div>
  )
}

export default CheckboxInput
