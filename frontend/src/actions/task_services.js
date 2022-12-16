import {axiosInstanceAuth} from './axios_config'


class TaskServices {

    constructor(title, description, chatId, notes, status, type, deadline) {
        this.status = status
        this.title = title
        this.description = description
        this.defaultTask = {
            title: '',
            description: '',
            chatId: ''
        }

        this.responseJson = {
            data: {},
            type: type,
            status: status,
            deadlined: deadline
        }
    }

    createTask() {
        switch (this.status) {
        case 1:
            this._createDefaultTask()
            break
        case 2:
            this._createBoard()
            break
        }

    }

    _createDefaultTask() {
        this.defaultTask.title = this.title
        this.defaultTask.description = this.description
        return this.defaultTask
        // const response = axiosInstanceAuth.post('api/v1/note')
    }

    _createBoard() {
        const data = this.defaultTask
        data.title = this.title
        data.description = this.description
        return data
    }
}


