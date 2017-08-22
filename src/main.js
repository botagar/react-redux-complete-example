import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import NavBar from './common/navbar.component.jsx'

import initialState from './common/initialState'
import configureStore from './redux/configureStore'
import RoutesConfig from './common/routes.config.js'
import NavConfig from './common/navLinks.config.js'

import './index.html'
import './reset.css'

const store = configureStore(initialState)

const appContainer = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <Router>
            <div>
              <NavBar navLinks={NavConfig} />

              <Switch>
                {RoutesConfig.map((route,index) => (
                  <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                ))}
                {/* <Route component={NoMatch}/> some 404 page */}
              </Switch>
            </div>
          </Router>
        </Provider>
    </AppContainer>,
    appContainer
  )
}

if (module.hot) {
    module.hot.accept('./home/home.component.jsx', () => {
        render()
    })
}

render()
