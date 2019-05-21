import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    oldUsername: ""
  }

  async componentDidMount(){
      const uid = this.props.match.params.uid;
      const res = await axios.get(`/api/user/${uid}`);
      if(res.d){
          this.showUser(res.data)
      } else {
          alert("this username is not in our system");
      }
  }

  showUser = (user) => {
    const {username, email, firstName, lastName, password} =user;
    this.setState({
      username, 
      email, 
      firstName, 
      lastName, 
      password, 
      oldUsername: username
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const {username, email, firstName, lastName, password, oldUsername} =this.state;
    
    if(username !== oldUsername) {
        //check if username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        alert("Username is taken, Please try another one");
          return;
      } else {
        const newUser = {
          _id: this.props.match.params.uid,
          username,
          password,
          email, 
          firstName, 
          lastName
        }
          const res = await axios.put("/api/user", newUser);
          this.showUser(res.data);
      }
    }
  }

  render() {
    const {username, email, firstName, lastName} =this.state;

    return (
      <div>
    <nav className="navbar navbar-dark bg-info fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
          <button className="btn" form="profileForm">
            <i className="fas fa-check" />
          </button>
    </nav>
    <div className="container">
      <form id="profileForm" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label className="text-primary" htmlFor="username">Username</label>
                  <input
                    placeholder="Enter your username here..."
                    className="form-control"
                    type="text"
                    id="usename"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                  />
            </div>
            <div className="form-group">
                <label className="text-primary" htmlFor="email">Email</label>
                  <input 
                    placeholder="Enter your email here..." 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
            </div>
            <div className="form-group">
                <label className="text-primary" htmlFor="password2">First Name</label>
                  <input 
                    placeholder="Enter your first name here..." 
                    type="text" 
                    className="form-control" 
                    id="firstName" 
                    name="firstName"
                    value={firstName}
                    onChange={this.onChange}
                  />
            </div>    
            <div className="form-group">
                <label className="text-primary" htmlFor="lastName">
                    Last Name
                </label>
                  <input 
                    placeholder="Enter your last name here..." 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    name="lastName"
                    value={lastName}
                    onChange={this.onChange}
                  />
            </div>
              <Link className="btn btn-info btn-block" to={`/user/${this.props.match.params.uid}/website`}
              >
                Websites
              </Link>
            <Link className="btn btn-danger btn-block" to="/login">
                Logout
            </Link>
      </form>
        </div>
            <nav className="navbar navbar-dark bg-info fixed-bottom">
                <div className="full-width">
                    <Link to="/user/:123">
                      <i className="fas fa-user"/>
                    </Link>
                </div>
            </nav>
      </div>
    );
  }
}
