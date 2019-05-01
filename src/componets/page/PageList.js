import React, { Component } from 'react'

export default class PageList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
        <a href="../website/website-list.html"><i className="far fa-arrow-alt-circle-left second-color"></i></a>
        <span className="navbar-brand mb-0 h1 text-info">Pages</span>
        <a href="page-new.html"><i className="fas fa-plus-circle second-color"></i> </a>
    </nav>
<div className="container">
<ul className="list-group">
    <li className="list-group-item">
        <a className="text-info" href="../widget/widget-list.html">Blog Post</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cogs"></i></a>
    </li>
    <li className="list-group-item">
        <a className="text-info" href="../widget/widget-list.html">Blogs</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cogs"></i></a>
    </li>
    <li className="list-group-item">
        <a className="text-info" href="../widget/widget-list.html">Home</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cogs"></i></a>
    </li>
    <li className="list-group-item">
        <a className="text-info" href="../widget/widget-list.html">About</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cogs"></i></a>
    </li>
    <li className="list-group-item">
        <a className="text-info" href="../widget/widget-list.html">Contact Us</a>
        <a className="float-right" href="page-edit.html"><i className="fas fa-cogs"></i></a>
    </li>
    </ul>
</div>
<nav className="navbar navbar-light fixed-bottom bg-secondary">
    <div className="full-width">
    <a className="float-right" href="../user/profile.html"><i className="second-color fas fa-user"></i></a>
    </div>
</nav>
      </div>
    )
  }
}
