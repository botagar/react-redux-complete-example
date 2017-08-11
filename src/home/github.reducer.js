const github = (state=[], action) => {
    switch (action.type) {
        case 'ADD_REPOSITORY':
            const updatedRepositories = state.repositories.concat({
                id: action.repository.id,
                name: action.repository.name
            })
            state.repositories = updatedRepositories;
            return state;
        default:
            return state
    }
}

export default github