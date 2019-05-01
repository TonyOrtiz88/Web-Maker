import React, { Component } from 'react'

export default class Register extends Component {
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
            <a className="btn btn-info btn-block" href="profile.html">Register</a>
            <a className="btn btn-danger btn-block" href="login.html">Cancel</a>
        </form>
    </div>
      </div>
    )
  }
}
