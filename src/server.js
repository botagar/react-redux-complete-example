import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/redux/configureStore'
import emptyState from '../src/common/initialState'
import App from '../src/App.jsx'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    let window = {}
    const store = configureStore(emptyState)
    console.info('Store Initialised')

    const html = renderToString(
        <App store={ store } Router={ StaticRouter } />
    );

    const preloadedState = store.getState()

    console.info(html)

    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) { /* ... */ }

console.info("Server now running on port ", port)
app.listen(port)