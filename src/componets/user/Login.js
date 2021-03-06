import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Login extends Component{

state = {
    username: "",
    password: "",
    showAlert: false
    }


onChange = e => {
    this.setState({
    [e.target.name]: e.target.value,
    showAlert: false
    })
}
       
onSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state;
    const user = {
        username,
        password,
    }
       this.login(user); 
}

login = async user => {
    try {
        const res = await axios.post('api/login', user);
        this.props.history.push(`/user/${res.data._id}`);
      } catch {
          this.setState({
              showAlert: true
          })
      }
    };
   

    render() {

        return(
            <div className="li-bg">
                <h1 className= "text-white text-center">Welcome To All-Access Web Maker</h1>
                <div className="container">
                    <span></span>
                    <span></span>
                <h1 className="text-white text-center">Login</h1>
                    {
                        this.state.showAlert? 
                            (<div className="alert alert-danger">invalid username and/or password</div>): null
                    }
                    <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label className="text-primary" htmlFor="username">Username</label>
                        <input
                            placeholder="Enter your username here..."
                            className="form-control"
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange = {this.onChange}
                        />
            </div>
                <div className="form-group">
                    <label className="text-primary" htmlFor="password">Password</label>
                        <input
                            placeholder="Enter your password here..."
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange = {this.onChange}
                        />
                </div>
                    <button className="btn btn-info btn-block">
                        Login
                    </button>
                <Link className="btn btn-primary btn-block" to="/register">
                Register
                </Link>
            </form>
            </div>
        </div>
        )
    }
}