import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class WebsiteNew extends Component {

    state = {
        uid: this.props.match.params.uid,
        websites: [],
        name: "",
        description: ""
    };

    async componentDidMount(){

        const isLoggedIn = await this.props.loggedIn();

      if(!isLoggedIn) {
        this.props.history.push("/login")
        return;
      }

        const res = await axios.get(`/api/user/${this.state.uid}/website`);
        this.filterWebsites(res.data);
    }

    filterWebsites = websites => {
        const newWebsites = websites.filter(
            website => website.developerId === this.state.uid
        );
        this.setState({
            websites: newWebsites
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async e => {
        const { name, description, uid } = this.state;
        e.preventDefault();
        const newWeb = {
            name,
            developerId: uid,
            description
        };
        
        await axios.post("/api/website", newWeb);
        
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

  render() {
    const { uid } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-info fixed-top row">
            <div className="col-lg-4 d-none d-lg-block">
                <Link className="float-left pt-2" to={`/user/${uid}/website`}>
                    <i className="far fa-arrow-alt-circle-left"/>
                </Link>
                    <span className="navbar-brand mb-0 h1 ml-3">
                        <strong>Websites</strong>
                    </span>
            </div>
        <div className="col-lg-8 text-center">
                <Link 
                className="d-lg-none float-left pt-2" 
                to={`/user/${uid}/website`}
                >
                    <i className="far fa-arrow-alt-circle-left"/>
                </Link>
            <span 
                className="navbar-brand mb-0 h1">
                <strong>New Website</strong>
            </span>
            <button 
            form="newWebForm"
            className="float-right btn"
            >
                <i className="fas fa-check pt-2"/>
            </button>
        </div>
    </nav>

<div className="row">
<div className="col-lg-4 d-none d-lg-block border-right full-height">
    <div className="container-fluid">
        <ul className="list-group">
            {this.state.websites.map(website => (
                <li className="list-group-item" key={website._id}>
                    <Link to="/user/:uid/website/:wid/page">
                        <span className="text-info">{website.name}</span>
                    </Link>
                    <Link className="float-right"
                    to={`/user/${uid}/website/${website._id }/page`}
                    >
                        
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
    <form id="newWebForm" onSubmit={this.onSubmit}>
        <div className="form-group">
            <label className="text-primary" htmlFor="name">
                <strong>Name</strong>
            </label>
            <input
                placeholder="Enter website name..."
                className="form-control"
                type="text" 
                id="name" 
                name="name"
                onChange={this.onChange}
                value={this.state.name}
            />
        <div className="form-group">
            <label className="text-primary" htmlFor="description">
                <strong>Description</strong>
            </label>
            <textarea
                placeholder="Enter website description..." className="form-control" 
                name="description" 
                rows="5"
                id= "description"
                type="text"
                onChange={this.onChange}
                value={this.state.description}
            />
        </div>
            <button className="btn btn-info btn-block">
                Submit
            </button>
            <Link to={`/user/${uid}/website`} className="btn btn-block btn-danger">  
                Cancel
            </Link>
        </div>
    </form>
    </div>
</div>
</div>
    <nav className="navbar navbar-dark bg-info fixed-bottom">
        <div className="full-width">
            <Link to={`/user/${uid}`}>
                <i className="fas fa-user"/>
            </Link>
        </div>
    </nav>
      </div>
    );
  }
}
