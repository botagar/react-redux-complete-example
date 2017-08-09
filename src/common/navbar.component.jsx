import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'

const NavBar = (props) =>
  <ul>
    {
      _.map(props.navLinks, (navLinkInfo) => {
        return <li key={navLinkInfo.name}><NavLink to={navLinkInfo.URI} activeClassName='active'>{navLinkInfo.name}</NavLink></li>
      })
    }
  </ul>

export default NavBar
