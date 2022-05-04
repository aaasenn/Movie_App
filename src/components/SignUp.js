import Form from "./Form";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setUser } from "../features/user/user-slice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => navigate('/')

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(password)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
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
      title='register'
      handleClick={handleRegister}
 />
 )
}
export default SignUp
