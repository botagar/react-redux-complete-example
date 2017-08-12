import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'
import GithubRepoList from './githubRepoList.component.jsx'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <form onSubmit={e => {e.preventDefault();props.onGithubUsernameSearchSubmit(e)}}>
      Github Username: <input type="text" name="username" />
      <button type='submit' >List Repositories</button>
    </form>
    {console.log('repos...')}
    {console.log(props.repos)}
    <GithubRepoList repos={props.repos} />
  </div>

Home.propTypes = {
  repos: PropTypes.array.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToEvents)(Home)

//onClick={this.props.dispatch({type:'ADD_REPOSITORY', repository: {id:1,name:'test'}})}