import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import Home from './Home/home';
import Links from './Links/links';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Router history={customHistory}>
      <div>
        <nav className="nav">
            <ul className="nav-list">  
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="#">Pictures</NavLink></li>
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="#">Art</NavLink></li>
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="/links">Links</NavLink></li>
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="#">Extra</NavLink></li>                                
            </ul>
        </nav>

        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/links" component={Links}/>
        </div>
      </div>
  </Router>


    
    , document.getElementById('root'),);
registerServiceWorker();