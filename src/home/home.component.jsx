import React from 'react'
import { loadReposForUser } from './github.action'
import GithubRepo from './github.component.jsx'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <GithubRepo />
  </div>

Home.propTypes = {};

export default Home
