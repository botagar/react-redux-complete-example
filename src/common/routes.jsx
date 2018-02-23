import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../home/home.component.jsx'
import About from '../about/about.component.jsx'
import Blog from '../blog/page.container.jsx'

const Routes = () =>
<Switch>
    <Route key={'home'} path={'/'} component={Home} exact={true} />
    <Route key={'index'} path={'/index.html'} component={Home} exact={true} />
    <Route key={'about'} path={'/about'} component={About} exact={true} />
    <Route key={'blog'} path={'/blog'} component={Blog} exact={true} />
    <Route key={'contact'} path={'/contact'} component={null} exact={true} />

    {/* <Route component={NoMatch}/> some 404 page */}
</Switch>

export default Routes
