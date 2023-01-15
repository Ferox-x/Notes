import {setUser} from '../reducers/userReducer'
import {axiosInstance, axiosInstanceAuth} from './axios_config'
import {
    createNoticeServices
} from '../services/notifications_services'

class Authentication {

    static async registration(username, phone_number,
        email, password, name, create) {

        const response = await axiosInstance.post('api/v1/users/',
            {username, phone_number, email, password, name})

        if (response.status === 201) {
            createNoticeServices(
                create,
                'Аккаунт успешно создан, пожалуйста войдите.',
                'green'
            )
            return 'success'
        }
    }

    static login = (username, password, create, redirect) => {

        return async dispatch => {

            const get_token = await axiosInstance.post(
                'api/v1/auth/token/login/',
                {username, password})

            localStorage.setItem('token', get_token.data.auth_token)

            const user_response = await axiosInstanceAuth.get(
                'api/v1/users/me/'
            )

            if (user_response.status === 200) {
                const user = user_response.data
                dispatch(setUser(user))
                createNoticeServices(
                    create,
                    'Вы успешно вошли.',
                    'green'
                )
                redirect()
                return 'success'
            }
        }
    }
}


export default Authentication
