import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../home/home.component.jsx'
import About from '../about/about.component.jsx'
import NavBar from './navbar.component.jsx'
import NavConfig from './routes.config'

const RoutedApp = () =>
  <Router>
    <div>
      <NavBar navLinks={NavConfig} />

      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  </Router>

export default RoutedApp
