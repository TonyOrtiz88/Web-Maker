import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class WidgetYoutube extends Component {

    onChange= e => {
        this.props.onChange(e);
    }

    onSubmit= e => {
        this.props.onSubmit(e)
    }

    onDelete = () => {
        this.props.onDelete();
    }

  render() {
    const {uid, wid, pid, name, url, width} = this.props
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
            <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1 text-info"> 
                    Widget Edit
                </span>
                    <button form="btn youtubeForm">
                        <i className="fas fa-check"/>
                    </button>
        </nav>
        <div className="container">
            <form id="youtubeForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="text-info" for="name">
                        <b>Name</b>
                    </label>
                        <input 
                            placeholder="Enter a name for this widget..." 
                            type="text" 
                            id="name" 
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={this.onChange}
                        />
                </div>
                
                <div className="form-group">
                    <label className="text-info" htmlFor="url">
                        <b>URL</b>
                    </label>
                        <input 
                            placeholder="Enter the image url..." 
                            type="text" 
                            id="url" 
                            name="url" 
                            className="form-control"
                            value={url}
                            onChange={this.onChange}
                        />
                </div>
                <div className="form-group">
                    <label className="text-info" htmlFor="width">
                        <b>Width</b>
                    </label>
                        <input 
                            type="text"
                            id="width"
                            className="form-control"
                            name="width"
                            value={width}
                            onChange={this.onChange}
                        />
        
                </div>
                <button
                    type="button"
                    onClick={this.onDelete}
                    className="btn btn-danger btn-block"
                >
                    Delete
                </button>
            </form>
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
