import React, {useEffect} from 'react'
import './notice.css'


function Notice({deleteNotice, id, message, color, ...props}) {

  useEffect(() => {
    const timer = setTimeout(deleteNotice, 2000, id)
    return () => clearTimeout(timer)
  })

  let colorClass

  switch (color) {
  case 'green':
    colorClass = 'notice_div__green'
    break
  case 'red':
    colorClass = 'notice_div__red'
    break
  }


  return (
    <div className={'notice_div ' + colorClass}>
      <div
        onClick={() => deleteNotice(id)}
        className="notice_image">
      </div>
      <div className="notice_message">
        {message}
      </div>
    </div>
  )
}

export default Notice
