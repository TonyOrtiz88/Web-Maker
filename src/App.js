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

addPage = newPage => {
    const newPages = this.state.pages;
    newPages.push(newPage);
    this.setState({
        pages: newPages
    });
}

editPage = newPage => {
    const newPages = this.state.pages.map(
        (page) => {
            if(page._id === newPage._id) {
                page = newPage
            }
            return page;
        }
    )
    this.setState({
        pages: newPages
    })
}

deletePage = pid => {
    const newPages = this.state.pages.filter(
        (page) => (
            page._id !== pid
        )
    )
    this.setState({
        pages: newPages
    })
}

editWidget = newWidget => {
        
    const newWidgets = this.state.widgets.map(
        (widget) => {
            if(widget._id === newWidget._id) {
                widget = newWidget
            }
            return widget;
        }
    )
    this.setState({
        widgets: newWidgets
    })
}

addWidget = newWidget => {
    const newWidgets = this.state.widgets;
    newWidgets.push(newWidget);
    this.setState({
        widgets: newWidgets
    });
}

deleteWidget = (wgid) => {
    const newWidgets = this.state.widgets.filter(
        (widget) => (
            widget._id !== wgid
        )
    )
    this.setState({
        widgets: newWidgets
    })
}



state = {
  

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
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path= "/register"component={Register}/>
                <Route exact path= "/user/:uid"component={Profile}/>
                <Route exact path= "/user/:uid/website"component={WebsiteList} />
                <Route exact path= "/user/:uid/website/new" component={WebsiteNew}/>
                <Route exact path= "/user/:uid/website/:wid" component={WebsiteEdit}/>
                <Route exact path="/user/:uid/website/:wid/page" render={ props => (<PageList {...props} pages={this.state.pages} />)} />
                <Route exact path="/user/:uid/website/:wid/page/new" render={ props => (<PageNew {...props} pages={this.state.pages} addPage={this.addPage} />)} />
                <Route exact path="/user/:uid/website/:wid/page/:pid" render={ props => (<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={ props=>(<WidgetList {...props} widgets={this.state.widgets} />)} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props=>(<WidgetChooser {...props} addWidget={this.addWidget} />)} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={ props=>(<WidgetEdit {...props} widgets={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} />
            </Switch>
        </Router>
        );
    }
}

export default App;
