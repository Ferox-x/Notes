import axios from 'axios'

export const registration = async(username, tel, email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/users', {
        username,
        tel,
        email,
        password
    })
        alert(response.data.message)

    }
    catch (e) {
        alert(e)
    }

}
