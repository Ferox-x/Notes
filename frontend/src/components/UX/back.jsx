import React from 'react';
import styles from './styles/back.module.css'

function Back({displaySet, displayValue, ...props}) {
  function changeDisplay() {
    displaySet(displayValue)
  }

  return (
    <div className={styles.back} onClick={changeDisplay}></div>
  );
}

export default Back;
