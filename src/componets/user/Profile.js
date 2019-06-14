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
    oldUsername: "",
    showUpdateAlert: false,
    role: "" 
  }

  async componentDidMount(){

    const isLoggedIn = await this.props.loggedIn();
      if(!isLoggedIn === 0) {
        this.props.history.push("/login")
        return;
      }

      const uid = this.props.match.params.uid;
      const res = await axios.get(`/api/user/${uid}`);
      if(res.data){
          this.showUser(res.data)
      } else {
          alert("this username is not in our system");
      }
  }

  showUser = (user) => {
    const {username, email, firstName, lastName, password, role} =user;
    this.setState({
      username, 
      email, 
      firstName, 
      lastName, 
      password, 
      oldUsername: username,
      role
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showUpdateAlert: false
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const {username, email, firstName, lastName, password, oldUsername} =this.state;
    
    if(username !== oldUsername) {
        //check if username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        alert("Username is taken, please try another one");
          return;
      }
    } 
          const newUser = {
          _id: this.props.match.params.uid,
          username,
          password,
          email, 
          firstName, 
          lastName
        }
         await axios.put("/api/user", newUser);
          //alert("Updated user profile successfully ");
          this.setState({
            showUpdateAlert: true
        })
          
      }
    
        // Logout
        logout = async () => {
          await axios.post("/api/logout");
          this.props.history.push("/login");
      }
   
  render() {
    const {username, email, firstName, lastName, role} =this.state;

    return (
      <div>
    <nav className="navbar navbar-dark bg-info fixed-top">
        <span className="navbar-brand mb-0 h1 text-center">Profile</span>
          <button className="btn" form="profileForm">
            <i className="fas fa-check" />
          </button>
    </nav>
    <div className="container">
        {this.state.showUpdateAlert &&
          (<div className="alert alert-success">Updated Successfully </div>)}

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
            <button type="button" onClick={this.logout} className="btn btn-danger btn-block">
                Logout
            </button>
            { role === "admin" ? (
                <Link className= "btn btn-block second-color2" to="/manage">
                  Manage Users
              </Link>
              ) : null }
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
