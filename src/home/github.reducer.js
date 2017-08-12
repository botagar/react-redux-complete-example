import { ADD_REPOSITORY, ADD_REPOSITORIES, SEARCH_REPOSITORIES } from './github.action'

const github = (state=[], action) => {
    switch (action.type) {
        case ADD_REPOSITORY:
          state.repositories = [...state.repositories, {
              id: action.repository.id,
              name: action.repository.name
          }]
          return state
        case ADD_REPOSITORIES:
          console.log('Add Repositories called')
          return state
        case SEARCH_REPOSITORIES:
          console.log('Search Repositories called')
          return state
        default:
            return state
    }
}

export default github
