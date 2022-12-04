import React, {useEffect} from 'react';
import './notice.css';



function Notice(props) {

  useEffect(() => {
    const timer = setTimeout(props.deleteNotice, 5000, props.id)
    return () => clearTimeout(timer)
  });

  return (
    <div className='notice_div'>
      <div className='notice_image'>

      </div>
      <div className='notice_message'>
        {props.message}
      </div>
    </div>
  );
}

export default Notice;
