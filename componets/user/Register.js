import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div class="container">
        <h1 class="text-info">Register</h1>
        <form>
            <div class="form-group">
                <label class="text-primary" for="username">Username</label>
                <input placeholder="Create a username here..." class="form-control" type="text" id="usename" name="username"/>
            </div>
            <div class="form-group">
                <label class="text-primary" for="password">Password</label>
                <input placeholder="Creat a password here..." type="password" class="form-control" id="password" name="password"/>
            </div>
            <div class="form-group">
                <label class="text-primary" for="password2">Verify Password</label>
                <input placeholder="Re-enter your password here..." type="password" class="form-control" id="password2" name="password"/>
            </div>
            <a class="btn btn-info btn-block" href="profile.html">Register</a>
            <a class="btn btn-danger btn-block" href="login.html">Cancel</a>
        </form>
    </div>
      </div>
    )
  }
}
