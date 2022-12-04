import React, {useState} from "react";
import './sign_up.css';
import ValidationTitle from "../validation_title/validation_title";
import FormInputs from "../formInputs/formInputs";
import './form.css';
import Authentication from "../../../actions/auth";
import urls from "../../../urls";
import {useNavigate} from "react-router-dom";


function SignUp(props) {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigate = useNavigate();

  const redirectMainPage = () => {
    navigate(urls.MAIN_PAGE);
  }

  function sendRegisterForm() {
    let result = Authentication.registration(
              username, phone, email, password, fullname,
              props.create
            )
    result.then(value => {
      if (value === 'success'){
        return redirectMainPage()
      }
    })
  }

  return (
    <div className="login-page">
      <div className="login-content">
        <ValidationTitle title={{val_title: 'Регистрация'}}/>
        <div className="user-form">
          <FormInputs value={username} setValue={setUsername}
                      placeholder={'Логин'}
                      type={'text'}/>
          <FormInputs value={fullname} setValue={setFullname}
                      placeholder={'Полное имя'}
                      type={'text'}/>
          <FormInputs value={phone} setValue={setPhone}
                      placeholder={'Номер телефона'} type={'tel'}/>
          <FormInputs value={email} setValue={setEmail} placeholder={'Почта'}
                      type={'email'}/>
          <FormInputs value={password} setValue={setPassword}
                      placeholder={'Пароль'} type={'password'}/>
          <FormInputs value={password2} setValue={setPassword2}
                      placeholder={'Повторите пароль'} type={'password'}/>
          <button
            className="submit-button"
            form="login_form" type="submit"
            onClick={() => sendRegisterForm()
          }>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
