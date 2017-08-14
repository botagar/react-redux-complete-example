import axios from 'axios'

// TODO: Look into dependency inversion
// Not sure if this needs to be a class with a static method. Low on priority list to investigate though... :\

class GithubApi {
  static getAllPublicRepositoriesForUser (username) {
    let endpoint = 'https://api.github.com/users/' + username + '/repos'
    return axios.get(endpoint)
      .then(res => {
        return res.data
      })
      .catch(function (err) {
        return err
      })
  }
}

export default GithubApi
