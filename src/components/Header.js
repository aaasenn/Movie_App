import React from 'react';
import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../features/user/user-slice';

export default function Header() {
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
  <>
    <h1 className='col align-start'><Link to="/">Watch List</Link></h1>
      <div className='col align-self-center' > 

        <span>Hello, {email}</span>
        <button className="btn btn-outline-secondary btn-sm ml-4" onClick={()=> dispatch(removeUser())}>Log out</button>
        
      </div>
  </>) : (
    <>
      <h1 className='col align-start'><Link to="/">Watch List</Link></h1>
      <div className='col align-self-center' > 

        <Link to = "/registration">
          <input type='button' value='Sign up'
          className="btn btn-outline-primary btn-lg"
          ></input>
        </Link>
        <Link to = "/login">
          <input type='button' value='Login'
          className="btn btn-outline-primary btn-lg"
          ></input>
        </Link>
        
      </div>
    </>
  )
}
