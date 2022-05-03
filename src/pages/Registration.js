import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const Registration = () => {
  return (
    <>
      <h1>REGISTER</h1>
      <SignUp />

      <p>
        Already have an account? Go to <Link to='/login'>Sign In</Link>
      </p>
    </>
  )
}

export default Registration;
