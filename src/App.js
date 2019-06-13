import axios from "axios";
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//Users
import Login from './componets/user/Login';
import Profile from './componets/user/Profile';
import Register from './componets/user/Register';
//Websites
import WebsiteList from './componets/website/WebsiteList';
import WebsiteNew from './componets/website/WebsiteNew';
import WebsiteEdit from './componets/website/WebsiteEdit';
//Pages
import PageEdit from './componets/page/PageEdit';
import PageNew from './componets/page/PageNew';
import PageList from './componets/page/PageList';
//Widgets
import WidgetList from './componets/widget/WidgetList';
import WidgetChooser from './componets/widget/WidgetChooser';
import WidgetEdit from './componets/widget/WidgetEdit';

class App extends Component {

    // Check if user is logged in
    loggedIn = async () => {
        const res = await axios.get('/api/loggedIn');
     
        return res.data !== 0;
      };
     

render() {
  return (
      <Router className="app">
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path= "/register"component={Register}/>
                <Route exact path= "/user/:uid" render={props => <Profile {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path= "/user/:uid/website"render={props => <WebsiteList {...props} loggedIn={this.loggedIn} />} />
                <Route exact path= "/user/:uid/website/new" render={props => <WebsiteNew {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path= "/user/:uid/website/:wid" render={props => <WebsiteEdit {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path="/user/:uid/website/:wid/page" render={props => <PageList {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path="/user/:uid/website/:wid/page/new"render={props => <PageNew {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path="/user/:uid/website/:wid/page/:pid" render={props => <PageEdit {...props} loggedIn={this.loggedIn} />} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={props => <WidgetList {...props} loggedIn={this.loggedIn} />} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props => <WidgetChooser {...props} loggedIn={this.loggedIn} />}/>
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={props => <WidgetEdit {...props} loggedIn={this.loggedIn} />} />
            </Switch>
        </Router>
        );
    }
}

export default App;
