import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'underscore'

const NavBarStyle = {
  border: '1px solid red'
}

const NavLogoStyle = {
  display: 'inline-block',
  height: '100px',
  width: '100px',
  cursor: 'pointer'
}

const NavImgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative'
}

const NavLinkContainerStyle = {
  display: 'inline-block'
}

const NavLinkStyle = {
  border: '1px solid green',
  listStyleType: 'none',
  display: 'inline-block',
  position: 'relative',
  margin: '0 20px 0 0',
  width: '10vw',
  height: '5vh'
}

const NavLinkTextStyle = {
  position: 'absolute',
  top: '10px',
  'WebkitTextStroke': '1px white'
}

const NavBar = (props) =>
  <div className='nav' style={NavBarStyle}>
    <NavLink to={'/'} style={NavLogoStyle}>
      <img 
        src='https://s-media-cache-ak0.pinimg.com/originals/52/f2/32/52f2321a110fc6588f555d91d04f9c5c.jpg'
        style={NavImgStyle}
        alt='Logo'/>
      <h2 style={NavLinkTextStyle}>""</h2>
    </NavLink>

    <ul className='nav-links' style={NavLinkContainerStyle}>
      {
        _.map(props.navLinks, (navLinkInfo) => {
          return <li key={navLinkInfo.name} style={NavLinkStyle}>
              <NavLink to={navLinkInfo.URI} activeClassName='active'>
                <img 
                  src={navLinkInfo.image}
                  style={NavImgStyle}
                  alt='Logo'/>
                <h2 style={NavLinkTextStyle}>{navLinkInfo.name}</h2>
              </NavLink>
            </li>
        })
      }
    </ul>
  </div>

export default NavBar
