import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


export default class PageList extends Component {

  state = {
    uid: "",
    wid: "",
    pages: []
}
filterPage = async (wid) => {
  // const currentPages = this.props.pages.filter(
  //     (page) => (
  //         page.websiteId === wid
  //     )
  // )
  const res = await axios.get(`/api/website/${this.state.wid}/page`)
  this.setState({
      pages: res.data
  })
};

async componentDidMount(){
    await this.setState({
      uid: this.props.match.params.uid,
      wid: this.props.match.params.wid
    })
    this.filterPage(this.state.wid);
}


  render() {
    const {uid, wid} = this.state;
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
          <Link to={`/user/${uid}/website`}>
            <i className="far fa-arrow-alt-circle-left second-color"/>
          </Link>
              <span className="navbar-brand mb-0 h1 text-info">
                Pages
              </span>
                  <Link to={`/user/${uid}/website/${wid}/page/new`}>
                    <i  className="fas fa-plus-circle second-color"/> 
                  </Link>
        </nav>

      <div className="container">
        <ul className="list-group">
          {
            this.state.pages.map(
              (page) => (
                <li key={page._id} className="list-group-item">
                    <Link 
                      className="text-info" 
                      to={`/user/${uid}/website/${wid}/page/${page._id}/widget`}
                    >
                      {page.name}
                    </Link>
                    <Link 
                      className="float-right"
                      to={`/user/${uid}/website/${wid}/page/${page._id}`}
                    >
                      <i className="fas fa-cogs"/>
                    </Link>
                </li>
              )
            )
          }
                
        </ul>
      </div>
          <nav className="navbar navbar-light fixed-bottom bg-secondary">
              <div className="full-width">
                <Link
                  className="float-right" 
                  to={`/user/${uid}`}
                >
                  <i className="second-color fas fa-user"/>
                </Link>
              </div>
          </nav>
        </div>
      );
    }
  }
