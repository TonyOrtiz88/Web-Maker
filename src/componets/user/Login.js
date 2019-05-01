import React, { Component } from "react";

export default class Login extends Component{
    render() {
        return(
            <div className="container">
            <h1 className="text-info">Login</h1>
            <form>
                <div className="form-group">
                    <label className="text-primary" for="username">Username</label>
                    <input placeholder="Enter your username here..." className="form-control" type="text" id="usename"
                        name="username"/>
                </div>
                <div className="form-group">
                    <label className="text-primary" for="password">Password</label>
                    <input placeholder="Enter your password here..." type="password" className="form-control" id="password"
                        name="password"/>
                </div>
                <a className="btn btn-info btn-block" href="profile.html">Login</a>
                <a className="btn btn-primary btn-block" href="register.html">Register</a>
            </form>
        </div>
        )
    }
}