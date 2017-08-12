import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <form onSubmit={e => {e.preventDefault();props.onGithubUsernameSearchSubmit(e)}}>
      Github Username: <input type="text" name="username" />
      <button type='submit' >List Repositories</button>
    </form>
    {console.log('repos...')}
    {console.log(props.repos)}
    <ul>
      {props.repos.map(repo => {
        {console.log('--> repo')}
        {console.log(repo)}
        <li key={repo.id}>{repo.name}</li>
      })}
    </ul>
  </div>

Home.propTypes = {
  //repos: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    repos: state.Github
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