import *  as types from './github.actionTypes'

const github = (state=[], action) => {
    switch (action.type) {
        case types.SET_REPOSITORIES:
          return Object.assign({}, state, {
            repositories: action.repositories
          })
        default:
            return state
    }
}

export default github
