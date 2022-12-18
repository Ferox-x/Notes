import React, {useState} from 'react'
import './styles/sign_up.css'
import './styles/generic.css'
import Title from "../UX/title";
import Authentication from '../../actions/auth'
import urls from '../../urls'
import {useNavigate} from 'react-router-dom'
import Input from "../UX/input";
import Button from "../UX/button";


function SignUp(props) {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigate = useNavigate()

  function redirectLogin() {
    navigate(urls.LOGIN)
  }

  function sendRegisterForm() {

    const result = Authentication.registration(
      username, phone, email, password, fullname,
      props.create
    )
    result.then(value => {
      if (value === 'success') {
        return redirectLogin()
      }
    })
  }

  return (
    <div className="auth-page">
      <Title
        style={{
          marginTop: '30px',
          marginBottom: '25px'
        }}
        title={'Регистрация'}
      />
      <div className="form register-form">
        <Input
          value={username}
          setValue={setUsername}
          placeholder={'Логин'}
          type={'text'}
        />
        <Input
          value={fullname}
          setValue={setFullname}
          placeholder={'Полное имя'}
          type={'text'}
        />
        <Input
          value={phone}
          setValue={setPhone}
          placeholder={'Номер телефона'}
          type={'tel'}
        />
        <Input
          value={email}
          setValue={setEmail}
          placeholder={'Почта'}
          type={'email'}
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder={'Пароль'}
          type={'password'}
        />
        <Input
          value={password2}
          setValue={setPassword2}
          placeholder={'Повторите пароль'}
          type={'password'}
        />
      </div>
        <Button
          className="submit-button"
          form="login_form"
          type="submit"
          children={'Регистрация'}
          onClick={sendRegisterForm}
          style={{
            marginBottom: '25px'
          }}
        />
        <div className="link"
             onClick={redirectLogin}>Уже есть аккаунт? Войти.
        </div>
    </div>
  )
}

export default SignUp
