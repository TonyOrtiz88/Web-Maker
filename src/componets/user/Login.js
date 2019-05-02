import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Login extends Component{

    state = {
        username: "",
        password: ""
    }

onSubmit = e => {
    e.preventDefault();

}

    render() {

        return(
            <div className="container">
            <h1 className="text-info">Login</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="text-primary" for="username">Username</label>
                    <input
                    placeholder="Enter your username here..."
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    />
                </div>
                <div className="form-group">
                    <label className="text-primary" for="password">Password</label>
                    <input
                    placeholder="Enter your password here..."
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    />
                </div>
                <button className="btn btn-info btn-block">
                Login
                </button>
                <Link className="btn btn-primary btn-block" to="/register">Register</Link>
            </form>
        </div>
        )
    }
}