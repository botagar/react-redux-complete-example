import initialState from '../common/initialState'
import *  as types from './github.actionTypes'
import { loadReposForUser } from './github.action'

const github = (state=initialState.Github, action) => {
    switch (action.type) {
        case types.ADD_REPOSITORY:
          state.repositories = [...state.repositories, {
              id: action.repository.id,
              name: action.repository.name
          }]
          return state
        case types.ADD_REPOSITORIES:
          console.log('Add Repositories called')
          return action.repositories
        case types.SEARCH_REPOSITORIES:
          console.log(`Search Repositories called with user ${action.username}`)
          
          return state
        default:
            return state
    }
}

export default github
