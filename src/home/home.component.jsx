import React from 'react'
import GithubRepo from '../github/github.component.jsx'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <GithubRepo />
  </div>

Home.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

export default Home
