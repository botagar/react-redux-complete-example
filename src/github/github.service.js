import axios from 'axios'

// class github {
//   constructor(){
//     this.state = {
//       names: []
//     };
//   }

//   getGithubRepos() {
//     // For use with redux-thunk middleware
//     return (dispatch, getState) => {
//       axios.get('https://api.github.com/users/botagar/repos')
//       .then( res => {
//         return res.data
//       })
//       .then( data => {
//         dispatch({type:'ADD_REPOSITORIES', repositories: data})
//       })
//       .catch( function(err) {
//         console.error('Failed to fetch repositories from github', err)
//         dispatch({type:'REPOSITORIES_REQ_FAILED', error: err})
//       })
//     }
//   }
// }

// export default github

export function getPublicRepositoriesForUsername(username) {
  console.log('Fetching repositories...')
  let endpoint = 'https://api.github.com/users/' + username + '/repos'
  return dispatch => {
    return axios.get(endpoint)
      .then( res => {
        return res.data
      })
      .then( data => {
        console.log('Repositories fetched')
        dispatch({type:'ADD_REPOSITORIES', repositories: data})
      })
      .catch( function(err) {
        console.error('Failed to fetch repositories from github', err)
        dispatch({type:'REPOSITORIES_REQ_FAILED', error: err})
      })
  }
}