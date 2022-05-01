import React from 'react'

export default function Header() {
  return (
    <>
      <h1 className='col align-start'>Watch List</h1>
      <div className='col align-self-center' >
        <input type='button' value='Log In'
        className="btn btn-outline-primary btn-lg"
        ></input>
        <input type='button' value='Sign Up'
        className="btn btn-outline-primary btn-lg"
        ></input>
      </div>
    </>
  )
}
