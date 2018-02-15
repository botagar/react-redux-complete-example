import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './common/navbar.component.jsx'
import NavConfig from './common/navLinks.config.js'

import Home from './home/home.component.jsx'
import About from './about/about.component.jsx'

const App = () =>
  <Switch>
    <Route key={'home'} path={'/'} component={Home} exact={true} />
    <Route key={'about'} path={'/about'} component={About} exact={true} />
    <Route key={'market'} path={'/market'} component={null} exact={true} />

    {/* <Route component={NoMatch}/> some 404 page */}
  </Switch>

export default App