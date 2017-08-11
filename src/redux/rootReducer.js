import { combineReducers } from 'redux';

import GithubReducer from '../home/github.reducer'

export default combineReducers ({
  // Import and add reducers here
  // Gives the following error when this is empty:
  // --> Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers
  GithubReducer
})