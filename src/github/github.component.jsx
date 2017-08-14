import React from 'react'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'
import GithubRepoList from './githubRepoList.component.jsx'

const Github = (props) =>
  <div>
    <form onSubmit={e => { e.preventDefault(); props.onGithubUsernameSearchSubmit(e) }}>
      Github Username: <input type='text' name='username' />
      <button type='submit' >List Repositories</button>
    </form>
    <GithubRepoList repos={props.repos} />
  </div>

Github.PropTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

const mapStateToProps = state => {
  return {
    repos: state.Github.repositories
  }
}

const mapDispatchToEvents = dispatch => {
  return {
    onGithubUsernameSearchSubmit: (event) => {
      dispatch(loadReposForUser(event.target.querySelector('input').value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToEvents)(Github)
