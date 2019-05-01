import React, { Component } from 'react'

export default class WebSiteNew extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <a className="float-left pt-2" href="website-list.html"><i className="far fa-arrow-alt-circle-left"></i></a>
            <span className="navbar-brand mb-0 h1 ml-3">Websites</span>
            <a className="float-right pt-2" href="website-new.html"><i className="fas fa-plus-circle"></i></a>
        </div>
        <div className="col-lg-8">
                <a className="d-lg-none float-left pt-2" href="website-list.html"><i className="far fa-arrow-alt-circle-left"></i></a>
            <span className="navbar-brand mb-0 h1">New Website</span>
            <a href="website-list.html"><i className="fas fa-check pt-2"></i></a>
        </div>
    </nav>
<section className="row">
<div className="col-lg-4 d-none d-lg-block border-right full-height">
    <div className="container ">
        <ul className="list-group">
            <li className="list-group-item">
                <a href="../page/page-list.html"><span className="text-info">Address Book App</span></a>
                <a className="float-right" href="website-edit.html"><i className="fas fa-cogs"></i></a>
            </li>
            <li className="list-group-item">
                <a href="../page/page-list.html"><span className="text-info">Blogger App</span></a>
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
    </div>
</div>
<div className="col-lg-8">
    <div className="container">
    <form>
        <div className="form-group">
            <label className="text-primary" for="name">Name</label>
            <input placeholder="Enter website name..." className="form-control" type="text" id="name" name="name"/>
        <div className="form-group">
            <label className="text-primary" for="description">Description</label>
            <textarea placeholder="Enter website description..." className="form-control" name="description" rows="5"></textarea>
        </div>
        </div>
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
