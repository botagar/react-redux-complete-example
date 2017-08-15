import * as types from './github.actionTypes'

export const setRepositories = repositories => {
  return {
    type: types.SET_REPOSITORIES,
    repositories
  }
}

export const fetchRepositoriesFailed = error => {
  return {
    type: types.FETCH_REPOSITORIES_FAILED,
    error
  }
}

export function loadReposForUser (username) {
  return {
    type: types.FETCH_REPOSITORIES_START,
    username
  }
}
