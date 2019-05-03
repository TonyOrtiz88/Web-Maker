import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div>
    <nav className="navbar navbar-dark bg-info fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <a href="profile.html"><i className="fas fa-check"></i></a>
    </nav>
    <div className="container">
      <form>
            <div className="form-group">
                <label className="text-primary" for="username">Username</label>
                <input placeholder="Enter your username here..." className="form-control" type="text" id="usename" name="username"/>
            </div>
            <div className="form-group">
                <label className="text-primary" for="email">Email</label>
                <input placeholder="Enter your email here..." type="email" className="form-control" id="email" name="email"/>
            </div>
            <div className="form-group">
                <label className="text-primary" for="password2">First Name</label>
                <input placeholder="Enter your first name here..." type="text" className="form-control" id="firstName" name="firstName"/>
            </div>    
            <div className="form-group">
                <label className="text-primary" for="lastName">Last Name</label>
                <input placeholder="Enter your last name here..." type="text" className="form-control" id="lastName" name="lastName"/>
            </div>
            <a className="btn btn-info btn-block" href="../website/website-list.html">Websites</a>
            <Link className="btn btn-danger btn-block" to="/login">Logout</Link>
        </form>
        </div>
        <nav className="navbar navbar-dark bg-info fixed-bottom">
            <div className="full-width">
                <a href="profile.html"><i className="fas fa-user"></i></a>
            </div>
        </nav>
      </div>
    )
  }
}
