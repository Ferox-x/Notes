import {response} from 'express'
import {axiosInstanceAuth} from './axios_config'

export async function getTasks () {
    const response = await axiosInstanceAuth.get('api/v2/note')
    return response.data
}


class DefaultTaskClass {
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

export default DefaultTaskClass
