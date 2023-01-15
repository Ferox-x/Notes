import axios from 'axios'


const baseAxios = {
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
}


const axiosInstance = axios.create(
    {
        ...{

        },
        ...baseAxios
    }
)

const axiosInstanceAuth = axios.create(
    {
        ...{
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        },
        ...baseAxios
    }
)

export {axiosInstance, axiosInstanceAuth}
