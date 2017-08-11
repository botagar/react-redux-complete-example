import axios from 'axios'

class github {
  constructor(){
    this.state = {
      names: []
    };
  }

  getGithubRepos() {
    return axios.get('https://api.github.com/users/botagar/repos')
    .then( res => {
      return res.data
    })
    .catch( function(err) {
      console.error('Failed to fetch repositories from github', err)
      return Promise.reject(err)
    })
  }

  test() {
    return 'this is a test'
  }
}

export default github
