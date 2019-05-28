import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class WidgetHeading extends Component {

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
    const {uid, wid, pid, name, text, size} = this.props

    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-secondary">
                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
                    <i className="far fa-arrow-alt-circle-left"/>
                </Link>
                    <span className="navbar-brand mb-0 h1 text-info">
                        Widget Edit
                    </span>
                        <button className="btn" form="headingForm">
                            <i className="fas fa-check"/>
                        </button>
            </nav>
        <div className="container">
            <form id="headingForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="text-info">
                        <strong>Name</strong>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                    />
                </div>
        <div className="form-group">
            <label className="text-info" htmlFor="text">
                <strong>Text</strong>
            </label>
                <input
                    placeholder="Description or Content" 
                    type="text" 
                    className="form-control" 
                    id="text" 
                    value={text}
                    name="text"
                    onChange={this.onChange}
                />
        </div>
        <div className="form-group">
            <label className="text-info" htmlFor="size">
                <strong>Size</strong>
            </label>
                <input
                    id="size"
                    name="size"
                    type="number" 
                    className="form-control" 
                    value={size}
                    onChange={this.onChange}
                    placeholder="Size #"
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
            <nav className="navbar navbar-light fixed-bottom bg-secondary">
                <div className="full-width">
                    <Link 
                        className="float-right" 
                        to={`/user/${uid}`}
                    >
                        <i className="fas fa-user"/>
                    </Link>
                </div>
            </nav>
        </div>
        );
    }
}
