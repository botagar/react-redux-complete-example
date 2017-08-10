import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkTextStyle = {
  position: 'absolute',
  top: '10px',
  'WebkitTextStroke': '1px white'
}

const NavImgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative'
}

const NavigationLink = (props) => {
  <NavLink to={props.URI} activeClassName='active'>
    <img 
      src={props.image}
      style={NavImgStyle}
      alt='Logo'/>
    <h2 style={NavLinkTextStyle}>{props.name}</h2>
  </NavLink>
}

export default NavigationLink