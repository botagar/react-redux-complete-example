import * as types from './github.actionTypes'
import update from 'react-addons-update'

const github = (state = [], action) => {
  switch (action.type) {
    case types.SET_REPOSITORIES:
      return update(state, {
        repositories: {$set: action.repositories}
      })
    default:
      return state
  }
}

export default github
