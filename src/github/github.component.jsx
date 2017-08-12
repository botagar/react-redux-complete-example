import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'
import GithubRepoList from './githubRepoList.component.jsx'

const mapStateToProps = state => {
  return {
    repos: state.Github.repositories
  }
}

const mapDispatchToEvents = dispatch => {
  return {
    onGithubUsernameSearchSubmit: (event) => {
      console.log(`searching for ${event.target.querySelector('input').value}`)
      dispatch(loadReposForUser(event.target.querySelector('input').value))
    }
  }
}

const Github = (props) =>
  <div>
    <form onSubmit={e => {e.preventDefault();props.onGithubUsernameSearchSubmit(e)}}>
      Github Username: <input type="text" name="username" />
      <button type='submit' >List Repositories</button>
    </form>
    <GithubRepoList repos={props.repos} />
  </div>

Github.propTypes = {};

export default connect(mapStateToProps, mapDispatchToEvents)(Github)