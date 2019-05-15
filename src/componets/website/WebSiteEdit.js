import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WebsiteEdit extends Component {
    state = {
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        websites: [],
        name: "",
        description: ""
    };

    componentDidMount() {
        this.filterWebsites(this.props.websites);
        this.getWebsite(this.state.wid);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.wid !== this.props.match.params.wid) {
            this.getWebsite(this.props.match.params.wid);
        }
    }

    filterWebsites = websites => {
        const newWebsites = websites.filter(
            website => website.developerId === this.state.uid
        );
        this.setState({
            websites: newWebsites
        });
    };

    getWebsite = wid => {
        let currentWeb;
        for (let website of this.props.websites) {
            if (website._id === wid) {
                currentWeb = website;
                break;
            }
        }
        this.setState({
            name: currentWeb.name,
            description: currentWeb.description
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    delete = () => {
        this.props.deleteWeb(this.props.match.params.wid);
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.editWeb(
            this.props.match.params.wid,
            this.state.name,
            this.state.description
        );
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

  render() {
    const { uid } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <Link className="float-left pt-2" to="/user/:uid/website">
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1 ml-3">Websites</span>
            <Link className="float-right pt-2" to="/user/:uid/website/:wid/page/newl">
                <i className="fas fa-plus-circle"/>
            </Link>
        </div>
        <div className="col-lg-8">
            <Link className="d-lg-none float-left pt-2" to="/user/:uid/website">
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1">Edit Website</span>
            <Link to="/user/:uid/website">
                <i className="fas fa-check pt-2"/>
            </Link>
        </div>
    </nav>

<div className="row">
    <div className="col-lg-4 d-none d-lg-block border-right full-height">
        <div className="container-fluid">
            <ul className="list-group">
            {this.state.websites.map(website => (
                <li key={website._id} className="list-group-item">
                    <Link
                        to={`/user/${uid}/website/${
                            website._id
                        }/page`}
                    >
                        {website.name}
                    </Link>
                    <Link
                        to={`/user/${uid}/website/${
                            website._id
                        }`}
                        className="float-right"
                        >
                        <i className="fas fa-cog" />
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
    <div className="col-lg-8">
        <div className="container-fluid">
        <form id="editWebForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="text-primary" htmlFor="name">
                        <b>Name</b>
                    </label>
                        <input 
                            placeholder="Name of Website" 
                            className="form-control" 
                            type="text" 
                            id="name" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    <div className="form-group">
                        <label className="text-primary" htmlFor="description">
                            <b>Description</b>
                        </label>
                            <textarea 
                                id="name"
                                placeholder="Enter website description..." className="form-control" 
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={this.onChange}
                                rows="5"
                            />
                    </div>
                </div>
                <Link className="btn btn-danger btn-block" to={`/user/${uid}/website`}>
                    Cancel
                </Link>
                    <button
                        type="button"
                        onClick={this.delete}
                        className="btn btn-lg btn-danger float-right"
                    >
                        Delete
                    </button>
                </form>
        </div>
    </div>
</div>
        <nav className="navbar navbar-dark bg-info fixed-bottom">
            <div className="full-width">
                <Link to={`/user/${uid}`}
            > 
                    <i className="fas fa-user"/>
                </Link>
            </div>
        </nav>
      </div>
    );
  }
}
