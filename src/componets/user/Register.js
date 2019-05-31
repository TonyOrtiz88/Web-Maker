import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


export default class Register extends Component {

state = {
  username:"",
  password: "",
  password2: ""
}

onChange = e=> {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = e=> {
  e.preventDefault(); 
  const {username, password, password2} = this.state;
  this.register(username, password, password2);
}
async register(username, password, password2) {
  // Does password match
    if(password !== password2){
      alert("the password you enterd does not match");
      return;
    }

  //check if username is available
const res = await axios.get(`/api/user?username=${username}`);
console.log(res.data);

if(res.data){
  alert("Username is taken, Please try another one");
    return;
} else {
    const newUser = {
        username,
        password,
        email: "",
        firstName: "",
        lastName: ""
      };
    const res2 = await axios.post("/api/user", newUser);
    this.props.history.push(`/user/${res2.data._id}`);
}



}

  render() {
    const {username, password, password2} = this.state
    return (
      <div>
        <div className="container">
          <h1 className="text-info">Register</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label className="text-primary" for="username">Username</label>
                  <input 
                      placeholder="Create a username here..." className="form-control" 
                      type="text"
                      id="usename" 
                      name="username"
                      value = {username}
                      onChange={this.onChange}
                  />
            </div>
            <div className="form-group">
                <label className="text-primary" htmlFor="password">Password</label>
                  <input 
                      placeholder="Creat a password here..."
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password"
                      value = {password}
                      onChange={this.onChange}
                  />
            </div>
            <div className="form-group">
                <label className="text-primary" for="password2">Verify Password</label>
                  <input
                      placeholder="Re-enter your password here..."
                      type="password"
                      className="form-control"
                      id="password2"
                      name="password2"
                      value = {password2}
                      onChange={this.onChange}
                  />
            </div>
                <button className="btn btn-info btn-block">
                    Register
                </button>
                <Link className="btn btn-danger btn-block" to="/login">
                    Cancel
                </Link>
        </form>
      </div>
      </div>
    )
  }
}