import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from './componets/user/Login';
import Profile from './componets/user/Profile';
import Register from './componets/user/Register';
import WebSiteList from './componets/website/WebSiteList';
import WebSiteNew from './componets/website/WebSiteNew';
import WebSiteEdit from './componets/website/WebSiteEdit';
import PageEdit from './componets/page/PageEdit';
import PageNew from './componets/page/PageNew';
import PageList from './componets/page/PageList';
import WidgetList from './componets/widget/WidgetList';
import WidgetChooser from './componets/widget/WidgetChooser';



class App extends Component {

state = {
  users: [
      {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
      {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
      {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
      {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
          ],

  websites: [
      { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
      { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
      { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
      { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
      { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
      { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
      { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
            ],

  pages: [
      { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
      { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
      { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
          ],

  widgets: [
      { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
      { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
      { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
      { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
      { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
      ]
  }

render() {
  return (
      <Router className="app">
          <Route exact path="/" render = { props => (<Login {...props} users={this.state.users}/>)} />
          <Route exact path="/login" render = { props => (<Login {...props} users={this.state.users}/>)} />
          <Route exact path= "/user/:uid" render = { props => (<Profile {...props} users={this.state.users}/>)} />
          <Route exact path= "/register" render = { props => (<Register {...props} users={this.state.users}/>)} />
          <Route exact path= "/user/:uid/website" render = { props => (<WebSiteList {...props} users={this.state.users}/>)} />
          <Route exact path= "/user/:uid/website/new" component={WebSiteNew}/>
          <Route exact path= "/user/:uid/website/:wid" component={WebSiteEdit}/>
          <Route exact path= "/user/:uid/website/:wid/page" component={PageList}/>
          <Route exact path= "/user/:uid/website/:wid/page/new" component={PageNew}/>
          <Route exact path= "/user/:uid/website/:wid/page/:pid" component={PageEdit}/>
          <Route exact path= "/user/:uid/website/:wid/page/:pid/widget" component={WidgetList}/>
          <Route exact path= "//user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChooser}/>
          {/* <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetEdit}/> */}
      </Router>
  );
}
}

export default App;
