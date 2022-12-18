import React from 'react';
import styles from './styles/checkboxInput.module.css'

function CheckboxInput({id, name, value, children, ...props}) {
  return (
    <label className={styles.customCheckbox} {...props}>
      <input
        type={'checkbox'}
        name={name}
        value={value}
      />
      <span>{children}</span>
    </label>


  );
}

export default CheckboxInput;
