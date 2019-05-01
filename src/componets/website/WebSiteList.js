import React, { Component } from 'react'

export default class WebSiteList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top">
    <a href="../user/profile.html"><i className="far fa-arrow-alt-circle-left"></i></a>
    <span className="navbar-brand mb-0 h1">Websites</span>
    <a href="website-new.html"><i className="fas fa-plus-circle"></i></a>
</nav>
<section className="container">
    <ul className="list-group">
        <li className="list-group-item">
            <a href="../page/page-list.html"><span className="text-info">Address Book App</span></a>
            <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
        </li>
        <li className="list-group-item">
            <a href="../page/page-list.html"><span className="text-info">Blogger</span></a>
            <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
        </li>
        <li className="list-group-item">
            <a href="../page/page-list.html"><span className="text-info">Blogger App</span></a>
            <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
        </li>
        <li className="list-group-item">
            <a href="../page/page-list.html"><span className="text-info">Script Testing App</span></a>
            <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
        </li>
    </ul>
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
