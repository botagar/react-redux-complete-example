import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from './rootReducer.js'

// For more logging options: https://github.com/evgenyrodionov/redux-logger

const reactDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f

export default function configureStore (preloadedState) {
  const middlewares = [thunk, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = compose(middlewareEnhancer, reactDevTools)

  return createStore(rootReducer, preloadedState, enhancers)
}
