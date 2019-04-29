import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div>
    <nav class="navbar navbar-dark bg-info fixed-top">
        <span class="navbar-brand mb-0 h1">Profile</span>
        <a href="profile.html"><i class="fas fa-check"></i></a>
    </nav>
    <div class="container">
      <form>
            <div class="form-group">
                <label class="text-primary" for="username">Username</label>
                <input placeholder="Enter your username here..." class="form-control" type="text" id="usename" name="username"/>
            </div>
            <div class="form-group">
                <label class="text-primary" for="email">Email</label>
                <input placeholder="Enter your email here..." type="email" class="form-control" id="email" name="email"/>
            </div>
            <div class="form-group">
                <label class="text-primary" for="password2">First Name</label>
                <input placeholder="Enter your first name here..." type="text" class="form-control" id="firstName" name="firstName"/>
            </div>    
            <div class="form-group">
                <label class="text-primary" for="lastName">Last Name</label>
                <input placeholder="Enter your last name here..." type="text" class="form-control" id="lastName" name="lastName"/>
            </div>
            <a class="btn btn-info btn-block" href="../website/website-list.html">Websites</a>
            <a class="btn btn-danger btn-block" href="login.html">Logout</a>
        </form>
        </div>
        <nav class="navbar navbar-dark bg-info fixed-bottom">
            <div class="full-width">
                <a href="profile.html"><i class="fas fa-user"></i></a>
            </div>
        </nav>
      </div>
    )
  }
}
