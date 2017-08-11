import React from 'react'

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
         <button onClick={this.onClick}>Click Me</button>
      </div>
    )
  }
}

export default Home
