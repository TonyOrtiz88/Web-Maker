import React from 'react';
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



function App() {
  return (
    <Router className="app">
      <Route exact path= "/" component= {Login}></Route>
      <Route exact path= "/login" component= {Login}></Route>
      <Route exact path= "/user/:uid" component={Profile}></Route>
      <Route exact path= "/register" component={Register}></Route>
      <Route exact path= "/user/:uid/website" component={WebSiteList}></Route>
      <Route exact path= "/user/:uid/website/new" component={WebSiteNew}></Route>
      <Route exact path= "/user/:uid/website/:wid" component={WebSiteEdit}></Route>
      <Route exact path= "/user/:uid/website/:wid/page" component={PageList}></Route>
      <Route exact path= "/user/:uid/website/:wid/page/new" component={PageNew}></Route>
      <Route exact path= "/user/:uid/website/:wid/page/:pid" component={PageEdit}></Route>
      <Route exact path= "/user/:uid/website/:wid/page/:pid/widget" component={WidgetList}></Route>
      <Route exact path= "//user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChooser}></Route>
      {/* <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/:wgid" component={WidgetEdit}></Route> */}
    </Router>
  );
  
}

export default App;
