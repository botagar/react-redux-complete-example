import { expect } from 'chai'
import { describe, it } from 'mocha'

import github from './github.reducer'

describe('Github.Reducer', function () {
  it('Should do nothing if invalid action', function () {
    let initialState = { repositories: [] }
    let repository = {id: 2, name: 'Test Repo 2'}

    let newState = github(initialState, { type: 'INVALID_ACTION', repository })

    expect(newState).to.eql(initialState)
  })

  it('Should add a repository to the repositories list', function () {
    let initialState = { repositories: [{id: 1, name: 'Test Repo'}] }
    let repository = {id: 2, name: 'Test Repo 2'}

    let newState = github(initialState, { type: 'ADD_REPOSITORY', repository })

    expect(newState.repositories.length).to.eql(2)
    expect(newState.repositories[1]).to.eql(repository)
  })
})
