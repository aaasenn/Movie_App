import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <>
      <h1>LOGIN</h1>
      <Login />

      <p>
        Don't have an account? <Link to='/registration'>Register</Link>
      </p>
    </>
  )
}

export default LoginPage;
