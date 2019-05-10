import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WebSiteEdit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <Link className="float-left pt-2" to="/user/:uid/website">
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1 ml-3">Websites</span>
            <Link className="float-right pt-2" to="/user/:uid/website/new">
                <i className="fas fa-plus-circle"/>
            </Link>
        </div>
        <div className="col-lg-8">
            <Link className="d-lg-none float-left pt-2" to="/user/:uid/website">
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1">Edit Website</span>
            <button href="website-list.html">
                <i className="fas fa-check pt-2"/>
            </button>
        </div>
    </nav>
<section className="row">
    <div className="col-lg-4 d-none d-lg-block border-right full-height">
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <a className="text-info" href="../page/page-list.html">Address Book App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
                </li>
                <li className="list-group-item">
                    <a className="text-info" href="../page/page-list.html">Blogger</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
                </li>
                <li className="list-group-item">
                    <a className="text-info" href="../page/page-list.html">Blogger App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
                </li>
                <li className="list-group-item">
                    <a className="text-info" href="../page/page-list.html">Script Testing App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <div className="col-lg-8">
        <div className="container">
            <form>
                <div className="form-group">
                    <label className="text-primary" for="name">Website Name</label>
                    <input placeholder="Blogger" className="form-control" type="text" id="name" name="name"/>
                    <div className="form-group">
                        <label className="text-primary" for="description">Website Description</label>
                        <textarea placeholder="Enter website description..." className="form-control" name="description"
                            rows="5"></textarea>
                    </div>
                </div>
                <a className="btn btn-danger btn-block" href="website-list.html">Delete</a>
            </form>
        </div>
    </div>
</section>
    <nav className="navbar navbar-dark bg-info fixed-bottom">
        <div className="full-width">
            <a href="../user/profile.html"><i className="fas fa-user"></i></a>
        </div>
    </nav>
      </div>
    )
  }
}
