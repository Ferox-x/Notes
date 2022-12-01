import React from "react";
import './sign_up.css';
import ValidationTitle from "../validation_title/validation_title";
import Form from "../form/form";

function SignUp() {
  return (
    <div className="login-page">
      <div className="login-content">
        <ValidationTitle title={{val_title: 'Регистрация'}}/>
        <Form/>
      </div>
    </div>
)
}

export default SignUp;
