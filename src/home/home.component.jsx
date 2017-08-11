import React from 'react'
import { connect } from 'react-redux'

// const Home = (props) =>
//   <div>
//     <h1>Home</h1>
//   </div>

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  // onClick = () => {
  //   // Fetch repos
  // }

  // componentDidMount() {
  //   state.name = 'John'
  // }

  render() {
    return (
      <div>
         <h1>Welcome home {'John'}</h1> 
         {/* May shed insight: http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/ */}
         <button onClick={null} >Click Me</button>
      </div>
    )
  }
}

export default connect()(Home)

//onClick={this.props.dispatch({type:'ADD_REPOSITORY', repository: {id:1,name:'test'}})}