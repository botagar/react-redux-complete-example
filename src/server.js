import fs from 'mz/fs'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cheerio from 'cheerio'

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
async function handleRender(req, res) {
    const store = configureStore(emptyState)
    console.info('Store Initialised')

    const html = renderToString(
        <App store={ store } Router={ StaticRouter } />
    );

    const preloadedState = store.getState()

    res.set('cache-control', 'no-cache')
    res.send(await renderFullPage(html, preloadedState))
}

async function renderFullPage(html, preloadedState) {
    let initialHtml = await fs.readFile(__dirname + '/index.html', 'utf8')
    const $ = cheerio.load(initialHtml)

    let preloadedStateHtml = `
        <script type="text/js">
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    `

    $('#app').after(preloadedStateHtml)
    return $.html()
}

console.info("Server now running on port ", port)
app.listen(port)