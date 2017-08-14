import * as types from './github.actionTypes'
import GithubApi from './github.api'

export const setRepositories = repositories => {
  return {
    type: types.SET_REPOSITORIES,
    repositories
  }
}

export function loadReposForUser (username) {
  return function (dispatch) {
    return GithubApi.getAllPublicRepositoriesForUser(username)
      .then(repos => {
        dispatch(setRepositories(repos))
      })
      .catch(err => {
        throw (err)
      })
  }
}
