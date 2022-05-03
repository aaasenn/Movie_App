import Form from "./Form";
import {useDispatch} from 'react-redux';
import { setUser } from "../features/user/user-slice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';


const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(password)
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.log)
  }
  return (
    <Form
      title='register'
      handleClick={handleRegister}
 />
 )
}
export default SignUp
