import React, { Component } from "react";

export default class Login extends Component{
    render() {
        return(
            <div class="container">
            <h1 class="text-info">Login</h1>
            <form>
                <div class="form-group">
                    <label class="text-primary" for="username">Username</label>
                    <input placeholder="Enter your username here..." class="form-control" type="text" id="usename"
                        name="username"/>
                </div>
                <div class="form-group">
                    <label class="text-primary" for="password">Password</label>
                    <input placeholder="Enter your password here..." type="password" class="form-control" id="password"
                        name="password"/>
                </div>
                <a class="btn btn-info btn-block" href="profile.html">Login</a>
                <a class="btn btn-primary btn-block" href="register.html">Register</a>
            </form>
        </div>
        )
    }
}