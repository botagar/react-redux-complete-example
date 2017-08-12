import React from 'react'
import { connect } from 'react-redux'
import { addRepositories, searchRepositories } from './github.action'

const Something = (dispatch) => {
  return {
    onSubmit: (event) => {
      dispatch(searchRepositories(event.target.querySelector('input').value))
    }
  }
}

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <form onSubmit={e => {e.preventDefault()}}>
      Github Username: <input type="text" name="username" />
      <button onClick={ props.searchForAllPublicReposForUser } >List Repositories</button>
    </form>
  </div>

// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//   }
  
//   // onClick = () => {
//   //   // Fetch repos
//   // }

//   // componentDidMount() {
//   //   state.name = 'John'
//   // }

//   render() {
//     return (
//       <div>
//          <h1>Welcome home {'John'}</h1> 
//          {/* May shed insight: http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/ */}
//          <button onClick={null} >Click Me</button>
//       </div>
//     )
//   }
// }

const stateToPropsMapping = state => {
  return {
    state
  }
}

const dispatchToEventsMapping = dispatch => {
  return {
    searchForAllPublicReposForUser: (user) => {
      dispatch(searchRepositories('botagar'))
    }
  }
}

export default connect(stateToPropsMapping, dispatchToEventsMapping)(Home)

//onClick={this.props.dispatch({type:'ADD_REPOSITORY', repository: {id:1,name:'test'}})}