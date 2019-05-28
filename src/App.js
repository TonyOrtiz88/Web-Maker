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
                <Route exact path="/user/:uid/website/:wid/page" component={PageList}/>
                <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew}/>
                <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component={WidgetList} />
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChooser}/>
                <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetEdit} />
            </Switch>
        </Router>
        );
    }
}

export default App;
