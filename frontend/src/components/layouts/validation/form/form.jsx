import React, {useState} from "react";
import './form.css';
import FormInputs from "../formInputs/formInputs";
import {registration} from "../../actions/user";

function Form() {
  const [username, setUsername] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <form method="post" className="login-form">
      <div className="user-form">
        <FormInputs value={username} setValue={setUsername} placeholder={'Имя'}
                    type={'text'}/>
        <FormInputs value={tel} setValue={setTel}
                    placeholder={'Номер телефона'} type={'tel'}/>
        <FormInputs value={email} setValue={setEmail} placeholder={'Почта'}
                    type={'email'}/>
        <FormInputs value={password} setValue={setPassword}
                    placeholder={'Пароль'} type={'password'}/>
        <button className="submit-button submit-button__login-margin"
            form="login_form" type="submit" onClick={() => registration(username, tel, email, password)}>Регистрация</button>
      </div>
    </form>
  )
}

export default Form;
