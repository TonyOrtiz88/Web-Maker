import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Register extends Component {

state = {
  
}
  
  render() {
    return (
      <div>
        <div className="container">
        <h1 className="text-info">Register</h1>
        <form>
            <div className="form-group">
                <label className="text-primary" for="username">Username</label>
                <input placeholder="Create a username here..." className="form-control" type="text" id="usename" name="username"/>
            </div>
            <div className="form-group">
                <label className="text-primary" for="password">Password</label>
                <input placeholder="Creat a password here..." type="password" className="form-control" id="password" name="password"/>
            </div>
            <div className="form-group">
                <label className="text-primary" for="password2">Verify Password</label>
                <input placeholder="Re-enter your password here..." type="password" className="form-control" id="password2" name="password"/>
            </div>
            <button className="btn btn-info btn-block">
              Register
            </button>
            <button className="btn btn-danger btn-block">
            Cancel
            </button>
        </form>
    </div>
      </div>
    )
  }
}
