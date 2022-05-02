import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1 className='col align-start'><Link to="/">Watch List</Link></h1>
      <div className='col align-self-center' >  
        <Link to = "/registration">
          <input type='button' value='Sign up'
          className="btn btn-outline-primary btn-lg"
          ></input>
        </Link>
      </div>
    </>
  )
}
