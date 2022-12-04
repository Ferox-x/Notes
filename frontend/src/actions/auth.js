import axios from "axios";
import {setUser} from "../reducers/userReducer";

class Authentication {

    static async registration(username, phone_number,
                              email, password, name, create) {

        const response = await axios.post('http://127.0.0.1:8000/api/v1/users/',
            {username, phone_number, email, password, name})

        if (response.status === 201) {
            let message = 'Аккаунт успешно создан, пожалуйста войдите'
            let id = Date.now()
            create(id, message)
            return 'success'
        }
    }

    static login = (username, password, create) => {
        return async dispatch => {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/auth/token/login/',
                {username, password})
            console.log(response.data)
            // dispatch(setUser(response.data))
            localStorage.setItem('token', response.data.auth_token)
            if (response.status === 200) {
                let message = 'Вы успешно вошли.'
                let id = Date.now()
                create(id, message)
                return 'success'
            }
        }

        }



}


export default Authentication
