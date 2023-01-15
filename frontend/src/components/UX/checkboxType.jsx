import React from 'react';
import styles from './styles/checkboxType.module.css'

function CheckboxType({title, displaySet, displayValue, ...props}) {
  function changeDisplay() {
    displaySet(displayValue)
  }

  return (
    <div className={styles.checkboxContent}>
      <label className={styles.labelText}>
        <input type={'checkbox'} className={styles.realCheckbox} onClick={changeDisplay}/>
        <span className={styles.customCheckbox}></span>
        {title}
      </label>

    </div>
  );
}

export default CheckboxType;
