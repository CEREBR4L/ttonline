import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import Home from './Home/home';
import Test from './TestPage/test';
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
                <li><NavLink exact activeClassName="active-nav-itm" className="nav-list-itm" to="/test">Test</NavLink></li>
            </ul>
        </nav>
        
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/test" component={Test}/>
        </div>
      </div>
  </Router>


    
    , document.getElementById('root'),);
registerServiceWorker();