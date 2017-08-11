import axios from 'axios'

class github {
  constructor(){
    this.state = {
      names: []
    };
  }

  getGithubRepos() {
    // For use with redux-thunk middleware
    return (dispatch, getState) => {
      axios.get('https://api.github.com/users/botagar/repos')
      .then( res => {
        return res.data
      })
      .then( data => {
        dispatch({type:'ADD_REPOSITORIES', repositories: data})
      })
      .catch( function(err) {
        console.error('Failed to fetch repositories from github', err)
        dispatch({type:'REPOSITORIES_REQ_FAILED', error: err})
      })
    }
  }

  test() {
    return 'this is a test'
  }
}

export default github
