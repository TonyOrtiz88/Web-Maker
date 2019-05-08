import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Register extends Component {

state = {
  username:"",
  password: "",
  password: ""
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
register(username, password, password2) {
  // Does password match
    if(password !== password2){
      alert("the password you enterd does not match");
      return;
    }
    // Check if username is available
    for(let user of this.props.users){
      if(user.username === username){
        alert("username is taken, Please try another one");
        return;
      }
    }
    // Add new user into users array;
    const newUser = {
      _id: (parseInt (this.props.users[this.props.users.length -1]._id) + 1).toString(),
      username,
      password,
      email: "",
      firstName: "",
      lastName: ""
    };
    this.props.addUser(newUser);
    // navigate to profile
    this.props.history.push("/user/" + newUser._id)

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
                <label className="text-primary" for="password">Password</label>
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