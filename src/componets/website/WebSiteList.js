import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WebSiteList extends Component {
  render() {
    return (
        <div>
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top">
            <Link to= "/user/123">
                <i className="far fa-arrow-alt-circle-left" />
            </Link>
    <span className="navbar-brand mb-0 h1">Websites</span>
        <Link to="/user/123/website/new">
            <i className="fas fa-plus-circle"/>
        </Link>
        </nav>
    </div>
   
<div className="container">
    <ul className="list-group">
        <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">
                <span className="text-info">Address Book App</span>
            </Link>
            <Link className="float-right" to="/user/:uid/website/:wid/page/:pid">
                <i className="fas fa-cogs"/>
            </Link>
        </li>
        <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">
                <span className="text-info">Blogger</span>
            </Link>
            <Link className="float-right" to="/user/:uid/website/:wid/page/:pid">
                <i className="fas fa-cogs"/>
            </Link>
        </li>
        <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">
                <span className="text-info">Blogger App</span>
            </Link>
            <Link className="float-right" to="/user/:uid/website/:wid/page/:pid">
                <i className="fas fa-cogs"/>
            </Link>
        </li>
        <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">
                <span className="text-info">Script Testing App</span>
            </Link>
            <Link className="float-right" to="/user/:uid/website/:wid/page/:pid">
                <i className="fas fa-cogs"/>
            </Link>
        </li>
    </ul>
</div>
    <nav className="navbar navbar-dark bg-info fixed-bottom">
        <div className="full-width">
        <Link to="/user/:123">
            <i className="fas fa-user"/>
        </Link>
        </div>
    </nav>
      </div>
    )
  }
}
