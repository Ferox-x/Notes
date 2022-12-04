import React, {useState} from "react";
import './login.css'
import ValidationTitle from "../validation_title/validation_title";
import FormInputs from "../formInputs/formInputs";
import {useDispatch} from "react-redux";
import Authentication from "../../../actions/auth";

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function sendLoginForm() {
    dispatch(Authentication.login(username, password, props.create))

  }


  return (
    <div className="login-page">
      <div className="login-content">
        <ValidationTitle title={{val_title: 'Вход'}}/>
        <div className="user-form">
          <FormInputs value={username} placeholder={'Логин'}
                      setValue={setUsername}
                      type={'text'}/>
          <FormInputs value={password} setValue={setPassword}
                      placeholder={'Пароль'} type={'password'}/>
          <button
            className="submit-button"
            form="login_form" type="submit"
            onClick={sendLoginForm}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;
