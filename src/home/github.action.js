export const ADD_REPOSITORY = 'ADD_REPOSITORY'

export const addRepository = repository => {
    return {
        type: 'ADD_REPOSITORY',
        repository
    }
}