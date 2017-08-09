import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'

const NavBarStyle = {
  border: '1px solid red'
}

const NavLogoStyle = {
  display: 'inline-block',
  height: '42px',
  width: '42px',
  cursor: 'pointer'
}

const NavLogoImgStyle = {
  'max-width': '100%',
  'max-height': '100%'
}

const NavLinkContainerStyle = {
  display: 'inline-block'
}

const NavLinkStyle = {
  border: '1px solid green',
  'list-style-type': 'none',
  display: 'inline-block'
}

const home = () => {

}

const NavBar = (props) =>
  <div className='nav' style={NavBarStyle}>
    <NavLink to={'/'} style={NavLogoStyle}>
      <img 
        src='https://s-media-cache-ak0.pinimg.com/originals/52/f2/32/52f2321a110fc6588f555d91d04f9c5c.jpg'
        style = {NavLogoImgStyle}
        alt='Logo'/>
    </NavLink>
    <ul className='nav-links' style={NavLinkContainerStyle}>
      {
        _.map(props.navLinks, (navLinkInfo) => {
          return <li key={navLinkInfo.name} style={NavLinkStyle}><NavLink to={navLinkInfo.URI} activeClassName='active'>{navLinkInfo.name}</NavLink></li>
        })
      }
    </ul>
  </div>

export default NavBar
