import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer.js'

// For more logging options: https://github.com/evgenyrodionov/redux-logger
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension(), createLogger);
}

