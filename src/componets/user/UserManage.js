import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class UserManage extends Component {
    
    async componentDidMount(){
        const isLoggedIn = await this.props.loggedIn();
        // Checking if you are not logged in
          if (isLoggedIn === 0 ) {
            this.props.history.push("/login");
            return;
          }
        // checking if you're not admin.
          if (isLoggedIn.role !== "admin") {
            this.props.history.push("/login");
            return;
          }
    }

    render() {
        return  <div>
    <nav className="navbar navbar-dark bg-info fixed-top">
            <Link to= {`/login`}>
                <i className="far fa-arrow-alt-circle-left" />
            </Link>
        <span className="navbar-brand mb-0 h1 text-center">Manage Users </span>
        <span></span>
    </nav>
        </div>;
    }
}
