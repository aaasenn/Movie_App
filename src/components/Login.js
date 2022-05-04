import Form from "./Form";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { setUser } from "../features/user/user-slice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React from 'react'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => navigate('/')

  const handleLogin = (email, password) => {
    const auth = getAuth();
    console.log()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          toker: user.accessToken,
        }));
        goHome();
      })
      .catch(console.error)
  }
  
  return (
    <Form 
      title='sign in'
      handleClick={handleLogin}
    />
  )
}

export default Login
