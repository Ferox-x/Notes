import {setUser} from '../reducers/userReducer'
import {axiosInstance, axiosInstanceAuth} from './axios_config'
import {
    createNoticeServices
} from '../components/service/notifications_services'

class Authentication {

    static async registration(username, phone_number,
        email, password, name, create) {

        const response = await axiosInstance.post('api/v1/users/',
            {username, phone_number, email, password, name})

        if (response.status === 201) {
            createNoticeServices(
                create,
                'Аккаунт успешно создан, пожалуйста войдите.'
            )
            return 'success'
        }
    }

    static login = (username, password, create) => {

        return async dispatch => {

            const get_token = await axiosInstance.post(
                'api/v1/auth/token/login/',
                {username, password})

            localStorage.setItem('token', get_token.data.auth_token)

            const user_response = await axiosInstanceAuth.get(
                'api/v1/users/me/'
            )

            dispatch(setUser(user_response.data))
            if (user_response.status === 200) {
                createNoticeServices(
                    create,
                    'Вы успешно вошли.'
                )
                return 'success'
            }
        }
    }
}


export default Authentication
