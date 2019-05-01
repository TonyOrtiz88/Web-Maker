import React, { Component } from 'react'

export default class WidgetImage extends Component {
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
            <label className="text-info" for="name">Name</label>
            <input placeholder="Enter a name for this widget..." type="text" id="name" name="name" className="form-control"/>
        </div>
        <div className="form-group">
            <label className="text-info" for="text">Text</label>
            <input placeholder="Enter a text description for this image (optional)" type="text" id="text" name="text" className="form-control"/>
        </div>
        <div className="form-group">
            <label className="text-info" for="url">URL</label>
            <input placeholder="Enter the image url..." type="text" id="url" name="url" className="form-control"/>
        </div>
    <div className="form-group">
        <label className="text-info" for="width">Width</label>
        <input type="range" list="tickmarks" className="form-control"/>
        <detalist id="tickmarks">
            <option value="0" label="0%"
             value="10"
             value="20"
             value="30"
             value="40"
             value="50" label="50%"
             value="60"
             value="70"
             value="80"
             value="90"
             value="100" label="100%"></option>
        </detalist>
    </div>
        <div className="form-group">
            <label className="text-info" for="file">File</label>
            <input type="file" id="file" name="file" className="form-control"/>
        </div>
        <a href="#" className="btn btn-primary btn-block">Upload Image</a>
        <a href="widget-list.html" className="btn btn-danger btn-block">Delete</a>
    </form>
</div>
<nav className="navbar fixed-bottom navbar-light bg-secondary">
        <div className="full-width">
            <a className="float-right" href="../user/profile.html"><i className="fas fa-user"></i></a>
        </div>
    </nav>
      </div>
    )
  }
}
