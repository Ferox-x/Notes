import React, {useState} from 'react'
import './login.css'
import {useDispatch} from 'react-redux'
import urls from '../../../urls'
import ValidationTitle from '../validation_title/validation_title'
import FormInputs from '../formInputs/formInputs'
import Authentication from '../../../actions/auth'
import {useNavigate} from 'react-router-dom'


function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  function redirectMainPage() {
    navigate(urls.MAIN_PAGE)
  }

  function sendLoginForm() {
    const result = Authentication.login(username, password, props.create)
    dispatch(result)
    redirectMainPage()
  }

  const styleLink = {
    marginTop: '65px'
  }

  const styleTitle = {
    marginBottom: '80px'
  }

  function redirectSignUp() {
    navigate(urls.SIGNUP)
  }

  return (
    <div className="login-page">
      <div className="login-content">
        <ValidationTitle style={styleTitle} title={{val_title: 'Вход'}}/>
        <div className="user-form">
          <FormInputs
            value={username}
            placeholder={'Логин'}
            setValue={setUsername}
            type={'text'}
          />
          <FormInputs
            value={password}
            setValue={setPassword}
            placeholder={'Пароль'}
            type={'password'}
          />
          <button
            style={{marginTop: '60px'}}
            className="submit-button"
            form="login_form"
            onClick={sendLoginForm}
          >
            Войти
          </button>
        </div>
        <div
          className="sign_up_link"
          style={styleLink}
          onClick={redirectSignUp}
        >
          Нет аккаунта? Зарегистрируйтесь!
        </div>
      </div>
    </div>
  )
}

export default Login
