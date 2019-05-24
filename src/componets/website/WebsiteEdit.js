import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class WebsiteEdit extends Component {
    state = {
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        websites: [],
        name: "",
        description: ""
    };

    async componentDidMount() {
        const res = await axios.get(`/api/user/${this.state.uid}/website`);
        this.filterWebsites(res.data);
        this.getWebsite(this.state.wid);
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
        for (let website of this.state.websites) {
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

    delete = async () => {
        await axios.delete(`/api/website/${this.state.wid}`)
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

    onSubmit = async e => {
        e.preventDefault();
        // this.props.editWeb(
        //     this.props.match.params.wid,
        //     this.state.name,
        //     this.state.description
        //);
        const newWeb = {
            _id: this.state.wid,
            name:this.state.name,
            description: this.state.description,
            developerId: this.state.uid
        }
        await axios.put("/api/website", newWeb)
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

  render() {
    const { uid } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
            <div className="col-lg-4 d-none d-lg-block text-white">
                <Link
                    className="float-left pt-2" 
                    to={`/user/${uid}/website`}
                >
                    <i className="far fa-arrow-alt-circle-left"/>
                </Link>
                    <span className="navbar-brand mb-0 h1 ml-3">
                        Websites
                    </span>
                <Link
                    className="float-right pt-2 text-white " 
                    to={`/user/${uid}/website/new`}
                >
                    <i className="fas fa-plus-circle"/>
                </Link>
            </div>
        <div className="col-lg-8">
            <Link 
                className="d-lg-none float-left pt-2"
                to={`/user/${uid}/website`}
            >
                <i className="far fa-arrow-alt-circle-left"/>
            </Link>
                <span className="navbar-brand mb-0 h1">
                    Edit Website
                </span>
            <button form="editWebForm" className="float-right btn">
                <i className="fas fa-check pt-2"/>
            </button>
        </div>
    </nav>

        <div className="row">
            <div className="col-lg-4 d-none d-lg-block border-right full-height">
                <div className="container-fluid">
                    <ul className="list-group">
                    {this.state.websites.map(website => (
                        <li
                            key={website._id} 
                            className="list-group-item"
                        >
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
                        <strong>Name</strong>
                    </label>
                        <input 
                            placeholder="Name of the Website" 
                            className="form-control" 
                            type="text" 
                            id="name" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    <div className="form-group">
                        <label 
                            className="text-primary" 
                            htmlFor="description"
                        >
                            <strong>Description</strong>
                        </label>
                            <textarea 
                                id="description"
                                placeholder="Enter website description..." className="form-control" 
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={this.onChange}
                                rows="5"
                            />
                    </div>
                </div>
                <Link 
                    className="btn-info btn btn-block" 
                    to={`/user/${uid}/website`}
                >
                    Cancel
                </Link>
                    <button
                        type="button"
                        onClick={this.delete}
                        className="btn-block btn btn-danger"
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
