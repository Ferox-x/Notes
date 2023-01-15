import {axiosInstanceAuth} from './axios_config'

export async function getTasks () {
    return (await axiosInstanceAuth.get('api/v2/note/')).data
}

export function deleteTask (taskId) {
    axiosInstanceAuth.delete('api/v2/note/' + taskId + '/')
}

export class BoardTaskClass {
    constructor(title, deadline, boardTasks) {
        this.status = 1
        this.title = title
        this.deadline = deadline
        this.type = 2
        this.boardTasks = boardTasks
    }

    #createData() {
        return {
            title: this.title,
            boardTasks: this.boardTasks,
        }
    }

    #createJSON() {
        return {
            data: this.#createData(),
            type: this.type,
            status: this.status,
            deadline: this.deadline
        }
    }

    sendTask() {
        axiosInstanceAuth.post('api/v2/note/', this.#createJSON())
    }
}


export class DefaultTaskClass {
    constructor(title, description, deadline) {
        this.status = 1
        this.title = title
        this.description = description
        this.deadline = deadline
        this.type = 1
    }

    #createData() {
        return {
            title: this.title,
            description: this.description,
        }
    }

    #createJSON() {
        return {
            data: this.#createData(),
            type: this.type,
            status: this.status,
            deadline: this.deadline
        }
    }

    sendTask() {
        axiosInstanceAuth.post('api/v2/note/', this.#createJSON())
    }
}
