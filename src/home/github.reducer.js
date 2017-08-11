const github = (state=[], action) => {
    switch (action.type) {
        case 'ADD_REPOSITORY':
          state.repositories = [...state.repositories, {
              id: action.repository.id,
              name: action.repository.name
          }]
          return state
        default:
            return state
    }
}

export default github
