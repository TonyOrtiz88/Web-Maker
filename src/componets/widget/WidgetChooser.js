import React, { Component } from 'react';
import {Link} from "react-router-dom";
import uuid from "uuid";

export default class WidgetChooser extends Component {

    createWidget = type => {
        const {uid, wid, pid} = this.props.match.params
        const newWidget = {
            _id: uuid(),
            name: "",
            widgetType: type,
            pageId: pid,
            text: "",
            size: 1,
            width: "",
            url: ""
        }
        this.props.addWidget(newWidget);
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget/${newWidget._id}`)
    }

  render() {
    const {uid, wid, pid} = this.props.match.params
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
            <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}
            >
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
            <span className="navbar-brand mb-0 h1 text-info">
                Choose Widget
            </span>
            <span></span>
        </nav>
    <div className="container">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <span className="text-info" onClick={this.createWidget.bind(this, "HEADING")}>
                    Header
                </span>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Label</Link>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Text Input</Link>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Link</Link>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Button</Link>
            </li>
            <li className="list-group-item">
                <span className="text-info" onClick={this.createWidget.bind(this, "IMAGE")}>
                    Image
                </span>
            </li>
            <li className="list-group-item">
                <span className="text-info"  onClick={this.createWidget.bind(this, "YOUTUBE")}>
                    YouTube
                </span>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Data Table</Link>
            </li>
            <li className="list-group-item">
                <Link className="text-info" to="#">Repeater</Link>
            </li>
        </ul>
        </div>
            <nav className="navbar fixed-bottom navbar-light bg-secondary">
                <div className="full-width">
                    <Link className="float-right" to={`/user/${uid}`}>
                        <i className="fas fa-user"/>
                    </Link>
                </div>
            </nav>
        </div>
    );
  }
}
