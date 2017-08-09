import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from '../home/home.component.jsx';
import About from '../about/about.component.jsx';

const RoutedApp = () => 
<Router>
    <div>
        <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>

        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </Switch>
    </div>
</Router>

export default RoutedApp;