export const ADD_REPOSITORY = 'ADD_REPOSITORY'
export const ADD_REPOSITORIES = 'ADD_REPOSITORIES'
export const SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES'

export const addRepository = repository => {
    return {
        type: ADD_REPOSITORY,
        repository
    }
}

export const addRepositories = repositories => {
    return {
        type: ADD_REPOSITORIES,
        repositories
    }
}

export const searchRepositories = username => {
    return {
        type: SEARCH_REPOSITORIES,
        username
    }
}