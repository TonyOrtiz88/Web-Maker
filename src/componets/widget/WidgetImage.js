import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WidgetImage extends Component {
  
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
            const {uid, wid, pid, name, width, url} = this.props
            return (
                <div>
                    <nav className="navbar fixed-top navbar-light bg-secondary">
                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
                            <i className="far fa-arrow-alt-circle-left"/>
                        </Link>
                            <span className="navbar-brand mb-0 h1 text-info">
                                Widget Edit
                            </span>
                            <button className="btn" form="imgForm">
                                <i className="fas fa-check"/>
                            </button>
                    </nav>
                        <div className="container">
                            <form id="imgForm" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label className="text-info" htmlFor="name">
                                        <strong>Name</strong>
                                    </label>
                                    <input
                                        placeholder="Enter a name for this widget..." 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="form-control"
                                        onChange={this.onChange}
                                        value={name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info" htmlFor="url">
                                        <strong>"Url"</strong>
                                    </label>
                                    <input
                                    placeholder="Enter the image url..." 
                                    type="text" 
                                    id="url" 
                                    name="url" 
                                    className="form-control"
                                    onChange={this.onChange}
                                    value={url}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info" htmlFor="width">
                                       <strong>Width</strong>
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
                                    className="btn btn-primary btn-block"
                                    onClick={this.onSubmit}
                                    >
                                    Upload Image
                                </button>
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
                                    <Link className="float-right"to={`/user/${uid}`}
                                    >
                                        <i className="fas fa-user"/>
                                    </Link>
                                </div>
                            </nav>
                </div>
            );
        }
    }
