import React, { Component } from 'react'

export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
        <a href="widget-list.html"><i className="far fa-arrow-alt-circle-left"></i></a>
        <span className="navbar-brand mb-0 h1 text-info">Choose Widget</span>
        <span></span>
    </nav>
    <div className="container">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <a className="text-info" href="widget-heading.html">Header</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">Label</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">HTML</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">Text Input</a>
            </li>
            <li className="list-group-item">
                    <a className="text-info" href="#">Link</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">Button</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="widget-image.html">Image</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="widget-youtube.html">YouTube</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">Data Table</a>
            </li>
            <li className="list-group-item">
                <a className="text-info" href="#">Repeater</a>
            </li>
        </ul>
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
