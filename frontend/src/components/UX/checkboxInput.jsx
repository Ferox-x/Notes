import React from 'react';
import styles from './styles/checkboxInput.module.css'

function CheckboxInput(props) {
  return (
    <label className={styles.customCheckbox}>
      <input
        type={'checkbox'}
      />
      <p>{props.subtask.title}</p>
    </label>


  );
}

export default CheckboxInput;
