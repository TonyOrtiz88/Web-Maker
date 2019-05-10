import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WebSiteNew extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <Link className="float-left pt-2" to="/user/:uid/website">
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
            <span className="navbar-brand mb-0 h1 ml-3">Websites</span>
            <button className="float-right pt-2">
                <i className="fas fa-plus-circle"/>
            </button>
        </div>
        <div className="col-lg-8">
                <Link
                    className="d-lg-none float-left pt-2"
                    to="/user/:uid/website"
                >
                    <i className="far fa-arrow-alt-circle-left"/>
                </Link>
            <span 
                className="navbar-brand mb-0 h1">New Website
            </span>
            <button>
                <i className="fas fa-check pt-2"/>
            </button>
        </div>
    </nav>

<div className="row">
<div className="col-lg-4 d-none d-lg-block border-right full-height">
    <div className="container-fluid">
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">
                    <span className="text-info">Address Book App</span>
                </Link>
                <Link className="float-right" to="/user/:uid/website/:wid"
                >
                    <i className="fas fa-cogs"/>
                </Link>
            </li>
        </ul>
    </div>
</div>
<div className="col-lg-8">
    <div className="container-fluid">
    <form>
        <div className="form-group">
            <label className="text-primary" for="name">
                <b>Name</b>
            </label>
            <input
                placeholder="Enter website name..."
                className="form-control"
                type="text" 
                id="name" 
                name="name"
            />
        <div className="form-group">
            <label className="text-primary" for="description">
                <b>Description</b>
            </label>
            <textarea
                placeholder="Enter website description..." className="form-control" 
                name="description" 
                rows="5"
                id= "description"
            />
        </div>
        <Link to="/user/:uid/website" className="btn btn-lg btn-warning">  
            Cancel
        </Link>
        <button className="btn btn-info btn-block float-right">
            Submit
        </button>
        </div>
    </form>
    </div>
</div>
</div>
    <nav className="navbar navbar-dark bg-info fixed-bottom">
        <div className="full-width">
            <Link to="/user/:uid">
                <i className="fas fa-user"/>
            </Link>
        </div>
    </nav>
      </div>
    )
  }
}
