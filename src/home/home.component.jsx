import React from 'react'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <form onSubmit={e => {e.preventDefault();props.onGithubUsernameSearchSubmit(e)}}>
      Github Username: <input type="text" name="username" />
      <button type='submit' >List Repositories</button>
    </form>
  </div>

const stateToPropsMapping = state => {
  return {
    state
  }
}

const dispatchToEventsMapping = dispatch => {
  return {
    onGithubUsernameSearchSubmit: (event) => {
      console.log(`searching for ${event.target.querySelector('input').value}`)
      dispatch(loadReposForUser(event.target.querySelector('input').value))
    }
  }
}

export default connect(stateToPropsMapping, dispatchToEventsMapping)(Home)

//onClick={this.props.dispatch({type:'ADD_REPOSITORY', repository: {id:1,name:'test'}})}