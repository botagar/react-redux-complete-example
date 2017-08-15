import 'babel-polyfill'
import Chai, { expect } from 'chai'
import ChaiThings from 'chai-things'
import { describe, it } from 'mocha'
import ConfigureStore from 'redux-mock-store'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as types from './github.actionTypes'
import { setRepositories, fetchRepositoriesFailed } from './github.action'
import githubApiMiddleware from './github.api.middleware'

Chai.use(ChaiThings)

const middlewares = [githubApiMiddleware]
var mockStoreFactory = ConfigureStore(middlewares)

describe('Github.Api.Middleware', function () {
  const middlewares = [githubApiMiddleware]
  const mockStoreFactory = ConfigureStore(middlewares)
  const testRepositories = [{ id: 1, name: 'Test Repository' }]
  var store, mockAxios

  before( () => {
    store = mockStoreFactory({})
    mockAxios = new MockAdapter(Axios)
    mockAxios.onGet('https://api.github.com/users/test/repos').reply(200, testRepositories)
  })

  it('Should dispatch FetchSuccess upon successful api call', async () => {
    
    const fetchRepositoriesAction = { type: types.FETCH_REPOSITORIES_START, username: 'test' }

    await store.dispatch(fetchRepositoriesAction)

    const actions = store.getActions()

    const successPayload = setRepositories(testRepositories)
    expect(actions).to.include.something.that.deep.equals(fetchRepositoriesAction)
    expect(actions).to.include.something.that.deep.equals(successPayload)
  })
})
