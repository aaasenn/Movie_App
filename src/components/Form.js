import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form({title, handleClick}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    mode: "onChange"
  });

  return (
    <form className="container mt-4" onSubmit = {handleSubmit((data, e) => {
      handleClick(email, pass)
})
      
      }>
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>

        <input {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
           })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        
         />
        {errors.email?.type === "pattern" &&
            "Your email should be: example@mail.com"}
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>

        <input {...register("pass", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
          })}
        type="password" className="form-control" id="exampleInputPassword1"
         />
         <p>{errors.pass?.type === "pattern" &&
         "Pass should be at least 6 length and includes numeric and Uppercase"}</p>

      </div>
      {isValid ? (<button type="submit" onClick = {() => {
        const login = document.getElementById('exampleInputEmail1')
        const password = document.getElementById('exampleInputPassword1')
        setEmail(login.value)
        setPass(password.value)
        }} className="btn btn-lg btn-primary pr-4 pl-4 submit">{title}</button>) : 
      (<button type="button" className="btn btn-lg btn-primary" disabled>{title}</button>
 )}
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
}