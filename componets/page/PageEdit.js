import React, { Component } from 'react'

export default class PageEdit extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-light bg-secondary">
    <a href="page-list.html"><i class="far fa-arrow-alt-circle-left"></i></a>
    <span class="navbar-brand mb-0 h1 text-info">Edit Page</span>
    <a href="page-list.html"><i class="fas fa-check"></i></a>
</nav>
<div class="container">
    <form>
        <div class="form-group">
            <label class="text-info" for="page-name">Name</label>
            <input placeholder="Blog Post" class="form-control" type="text" id="page-name" name="page-name"/>
        </div>
        <div class="form-group">
            <label class="text-info" for="title">Title</label>
            <input placeholder="Page Title" type="title" class="form-control" id="title" name="title"/>
        </div>
    </form>
    <a class="btn btn-danger btn-block" href="page-list.html">Delete</a>
</div>            
    <nav class="navbar navbar-light fixed-bottom bg-secondary">
        <div class="full-width">
            <a class="float-right" href="../user/profile.html"><i class="fas fa-user"></i></a>
        </div>
    </nav>
      </div>
    )
  }
}
