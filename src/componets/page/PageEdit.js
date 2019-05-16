import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class PageEdit extends Component {

  state = {
    uid: "",
    wid: "",
    pid: "",
    name: "",
    title: ""
}

async componentDidMount() {
  await this.setState({
      uid: this.props.match.params.uid,
      wid: this.props.match.params.wid,
      pid: this.props.match.params.pid
  })   
  const page = this.getPage();
  this.setState({
      name: page.name ,
      title: page.title
  })
}



getPage = () => {
for(let page of this.props.pages) {
    if(page._id === this.state.pid) {
        return page;
    }
}

return null;
} 

onChange = e => {
this.setState({
    [e.target.name]: e.target.value
})
}

onDelete = () => {
  this.props.deletePage(this.state.pid);
  this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
}

onSubmit = e => {
  e.preventDefault();
  const newPage = {
      _id: this.state.pid,
      name: this.state.name,
      websiteId: this.state.wid,
      title: this.state.title
}
this.props.editPage(newPage);
this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
}


  render() {
    const {uid, wid, name, title} = this.state
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-secondary">
          <Link to={`/user/${uid}/website/${wid}/page`}>
            <i className="far fa-arrow-alt-circle-left"/>
          </Link>
            <span className="navbar-brand mb-0 h1 text-info">
              Edit Page
            </span>
              <button form="editPageForm" className="btn">
                <i className="fas fa-check"/>
              </button>
        </nav>
      
      <div className="container">
          <form id="editPageForm" onSubmit={this.onSubmit}>
      <div className="form-group">
            <label className="text-info" htmlFor="name">
              <strong>Name</strong>
                </label>
                    <input
                      placeholder="Name this page"               className="form-control" 
                      type="text" 
                      id="name" 
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
      </div>
      <div className="form-group">
            <label className="text-info" htmlFor="title">
              <strong>Title</strong>
            </label>
              <input 
                placeholder="Page Title" 
                type="text" 
                className="form-control" 
                id="title" 
                name="title"
                onChange={this.onChange}
                value={title}
              />
        </div>
              <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-block btn-info">
                  Cancle 
              </Link>
                <button 
                  type="button"
                  onClick={this.onDelete}
                  className="btn-block btn-danger"
                >
                  Delete
                </button>
        </form>
    </div>            
          <nav className="navbar navbar-light fixed-bottom bg-secondary">
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
