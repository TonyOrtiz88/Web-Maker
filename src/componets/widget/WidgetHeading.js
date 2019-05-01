import React, { Component } from 'react'

export default class WidgetHeading extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
        <a href="widget-list.html"><i className="far fa-arrow-alt-circle-left"></i></a>
        <span className="navbar-brand mb-0 h1 text-info">Widget Edit</span>
        <a href="widget-list.html"><i className="fas fa-check"></i></a>
    </nav>
    <div className="container">
        <form>
    <div className="form-group">
        <label className="text-info" for="page-name">Name</label>
        <input className="form-control" type="text" id="page-name" name="page-name"/>
    </div>
    <div className="form-group">
        <label className="text-info" for="text">Text</label>
        <input placeholder="Description or Content" type="text" className="form-control" id="text" name="description"/>
    </div>
    <div className="form-group">
        <label className="text-info" for="size">Width</label>
        <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Size #"/>
        <div className="input-group-append">
            <span className="input-group-text">Text Size</span>
        </div>
        </div>
    </div>
        </form>
    <span></span>
        <a className="btn btn-danger btn-block" href="widget-list.html">Delete</a>
    </div>
    <nav className="navbar navbar-light fixed-bottom bg-secondary">
        <div className="full-width">
        <a className="float-right" href="../user/profile.html"><i className="fas fa-user"></i></a>
        </div>
        </nav>
      </div>
    )
  }
}
