import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from "uuid";
import axios from 'axios';

export default class PageNew extends Component {

  state = {
    uid: "",
    wid: "",
    name: "",
    title: ""
}

componentDidMount() {
  this.setState({
      uid: this.props.match.params.uid,
      wid: this.props.match.params.wid
  })    
}

onChange = e => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

onSubmit = async e => {
  e.preventDefault();
  const newPage = {
      _id: uuid(),
      name: this.state.name,
      websiteId: this.state.wid,
      title: this.state.title
  }
      //this.props.addPage
      await axios.post("/api/page", newPage);
      this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }
  render() {
    const {uid, wid, name, title} = this.state;

    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
            <Link to={`/user/${uid}/website/${wid}/page`}>
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1 text-info">
                  New Page 
                </span>
            <button 
            form="newPageForm"
            className= "btn"
            >
                <i className="fas fa-check"/>
            </button>
        </nav>
<div className="container">
    <form id="newPageForm" onSubmit={this.onSubmit}>
        <div className="form-group">
            <label className="text-info" htmlFor="name">
              <strong>Name</strong>
            </label>
              <input 
                placeholder="Page Name" 
                className="form-control" 
                type="text" 
                id="name" 
                name="name"
                onChange={this.onChange}
                value={name}
              />
        </div>
        <div className="form-group">
            <label className="text-info" htmlFor="title">
              <strong>Title</strong>
            </label>
              <input 
                placeholder="Page Title..." 
                type="text" 
                className="form-control" 
                id="title" 
                onChange={this.onChange}
                value={title}
                name="title"
              />
        </div>
            <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-block btn-danger">
                Cancel
            </Link>
              <button
                className="btn btn-block btn-info"
              >
                Submit
              </button>
      </form>
  </div>
          <nav className="navbar navbar-light fixed-bottom bg-secondary">
              <div className="full-width">
                <Link className="float-right" to={`/user/${uid}`}>
                  <i className="fas fa-user"/>
                </Link>
              </div>
          </nav>
      </div>
      );
    }
  }
