import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import initialState from './common/initialState'
import configureStore from './redux/configureStore'

import './index.html'
import './reset.css'

const render = () => {
  const reactDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const appContainer = document.getElementById('app')
  const store = configureStore(initialState, reactDevTools)

  ReactDOM.render(
    <AppContainer>
      <App store={store} Router={BrowserRouter} />
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