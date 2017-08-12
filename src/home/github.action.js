import *  as types from './github.actionTypes'
import GithubApi from './github.api'

export const addRepository = repository => {
    return {
        type: types.ADD_REPOSITORY,
        repository
    }
}

export const addRepositories = repositories => {
    return {
        type: types.ADD_REPOSITORIES,
        repositories
    }
}

export const searchRepositories = username => {
    return {
        type: types.SEARCH_REPOSITORIES,
        username
    }
}

export function loadReposForUser(username) {
    return function(dispatch) {
        return GithubApi.getAllPublicRepositoriesForUser(username)
            .then(repos => {
                dispatch(addRepositories(repos))
            })
            .catch(err => {
                throw(err)
            })
    }
}