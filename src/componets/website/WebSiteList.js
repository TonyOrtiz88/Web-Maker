import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WebSiteList extends Component {

state={
    uid: this.props.match.params.uid,
    websites: []
}

componentDidMount(){
    this.filterWebsites(this.props.websites);
}

filterWebsites = (websites) => {
    const newWebsites = websites.filter(
        website => (website.developerId === this.state.uid)
    )
    this.setState({
        websites: newWebsites
    })
}

  render() {
    const {uid} = this.state
    return (
        <div>
     
        <nav className="navbar navbar-dark bg-info fixed-top">
            <Link to= {`/user/${uid}`} >
                <i className="far fa-arrow-alt-circle-left" />
            </Link>
    <span className="navbar-brand mb-0 h1">Websites</span>
        <Link to={`/user/${uid}/website/new`}>
            <i className="fas fa-plus-circle" />
        </Link>
        </nav>

   
    <section className="container">
        <ul className="list-group">
        {
            this.state.websites.map(
                (website) => (
            <li key={website._id} className="list-group-item">
                <Link className="text-info" to ={`/user/${uid}/website/${website._id}/page`}>{website.name}
                </Link>
                <Link className="float-right" to={`/user/${uid}/website/${website._id}`}>
                    <i className="fas fa-cogs"/>
                </Link>
            </li>
                )
            )
        }
    </ul>
</section>
    <nav className="navbar navbar-dark bg-info fixed-bottom">
        <div className="full-width">
        <Link to={`/user/${uid}`}>
            <i className="fas fa-user"/>
        </Link>
        </div>
    </nav>
      </div>
    )
  }
}
