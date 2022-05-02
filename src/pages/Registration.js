import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registration() {
  return (
    <form className="container mt-4">
      <div className="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn-lg btn-primary pr-4 pl-4">Submit</button>
    </form>
  )
}
