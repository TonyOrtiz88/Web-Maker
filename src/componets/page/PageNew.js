import React, { Component } from 'react'

export default class PageNew extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
        <a href="page-list.html"><i className="far fa-arrow-alt-circle-left"></i></a>
        <span className="navbar-brand mb-0 h1 text-info">New Page</span>
        <a href="page-list.html"><i className="fas fa-check"></i></a>
    </nav>
<div className="container">
    <form>
        <div className="form-group">
            <label className="text-info" for="page-name">Name</label>
            <input placeholder="Page Name" className="form-control" type="text" id="page-name" name="page-name"/>
        </div>
        <div className="form-group">
            <label className="text-info" for="title">Title</label>
            <input placeholder="Page Title" type="title" className="form-control" id="title" name="title"/>
        </div>
    </form>
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
