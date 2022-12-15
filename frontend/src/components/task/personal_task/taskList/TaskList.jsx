import React from 'react'
import DetailTask from '../detail_task/detail_task'

function TaskList({tasks}) {
    return (
        <div>
            {tasks.map((task) =>
                <DetailTask task={task} key={task.id}/>
            )}
        </div>
    )
}

export default TaskList
