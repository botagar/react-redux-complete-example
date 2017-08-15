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
var mockStore = ConfigureStore(middlewares)

var mockAxios = new MockAdapter(Axios);
 
mockAxios.onGet('https://api.github.com/users/test/repos').reply(200, [
    { id: 1, name: 'Test Repository' }
  ]);

describe('Github.Api.Middleware', function () {
  it('Should dispatch FetchSuccess upon successful api call', async () => {
    const initialState = {}
    const store = mockStore(initialState)
    const fetchRepositoriesAction = { type: types.FETCH_REPOSITORIES_START, username: 'test' }

    await store.dispatch(fetchRepositoriesAction)

    const actions = store.getActions()

    const successPayload = setRepositories([{ id: 1, name: 'Test Repository' }])
    expect(actions).to.include.something.that.deep.equals(fetchRepositoriesAction)
    expect(actions).to.include.something.that.deep.equals(successPayload)
  })
})
