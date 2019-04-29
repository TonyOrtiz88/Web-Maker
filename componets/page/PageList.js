import React, { Component } from 'react'

export default class PageList extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-light bg-secondary">
        <a href="../website/website-list.html"><i class="far fa-arrow-alt-circle-left second-color"></i></a>
        <span class="navbar-brand mb-0 h1 text-info">Pages</span>
        <a href="page-new.html"><i class="fas fa-plus-circle second-color"></i> </a>
    </nav>
<div class="container">
<ul class="list-group">
    <li class="list-group-item">
        <a class="text-info" href="../widget/widget-list.html">Blog Post</a>
        <a class="float-right" href="page-edit.html"><i class="fas fa-cogs"></i></a>
    </li>
    <li class="list-group-item">
        <a class="text-info" href="../widget/widget-list.html">Blogs</a>
        <a class="float-right" href="page-edit.html"><i class="fas fa-cogs"></i></a>
    </li>
    <li class="list-group-item">
        <a class="text-info" href="../widget/widget-list.html">Home</a>
        <a class="float-right" href="page-edit.html"><i class="fas fa-cogs"></i></a>
    </li>
    <li class="list-group-item">
        <a class="text-info" href="../widget/widget-list.html">About</a>
        <a class="float-right" href="page-edit.html"><i class="fas fa-cogs"></i></a>
    </li>
    <li class="list-group-item">
        <a class="text-info" href="../widget/widget-list.html">Contact Us</a>
        <a class="float-right" href="page-edit.html"><i class="fas fa-cogs"></i></a>
    </li>
    </ul>
</div>
<Nav class="navbar navbar-light fixed-bottom bg-secondary">
    <div class="full-width">
    <a class="float-right" href="../user/profile.html"><i class="second-color fas fa-user"></i></a>
    </div>
</Nav>
      </div>
    )
  }
}
