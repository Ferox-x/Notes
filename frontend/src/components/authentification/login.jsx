import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import Title from "../UX/title";
import Input from "../UX/input";
import Button from "../UX/button";

import urls from '../../urls'
import Authentication from '../../actions/auth'

import './styles/login.css'
import './styles/generic.css'


function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  function redirectMainPage() {
    navigate(urls.MAIN_PAGE)
  }

  function sendLoginForm() {
    const result = Authentication.login(username, password, props.create, redirectMainPage)
    dispatch(result)
  }

  function redirectSignUp() {
    navigate(urls.SIGNUP)
  }

  return (
    <div className="auth-page">
      <Title
        title={'Вход'}
        style={{
          marginTop: '30px',
          marginBottom: '25px'
        }}
      />
      <div className="form login-form">
        <Input
          style={{
            marginBottom: '25px'
          }}
          value={username}
          placeholder={'Логин'}
          type={'text'}
          setValue={setUsername}
        />
        <Input
          style={{
            marginBottom: '25px'
          }}
          value={password}
          setValue={setPassword}
          placeholder={'Пароль'}
          type={'password'}
        />
      </div>
      <Button
        style={{
          marginBottom: '25px'
        }}
        className="submit-button"
        form="login_form"
        onClick={sendLoginForm}
        children={'Войти'}
      />
      <div
        className="link"
        onClick={redirectSignUp}
      >
        Нет аккаунта? Зарегистрируйтесь!
      </div>
    </div>
  )
}

export default Login
