import React from 'react'
import HeaderItem from './HeaderItem'
import { Link } from 'react-router-dom'

function HeaderBar(){

  var headerStyles = {
    backgroundColor:'#ecf0f1',
    fontFamily:'sans-serif',
    width:'100%',
    textAlign: 'justify'
  }
  //replace with JSX loop
  return(
    <div style={headerStyles}>
      <Link to="/"><HeaderItem title="Home" /></Link>
      <Link to="#"><HeaderItem title="About" /></Link>
      <Link to="#">  <HeaderItem title="Register" /></Link>
      <Link to="#"><HeaderItem title="See all Sessions" /></Link>
      <Link to="#"><HeaderItem title="Sign Up" /></Link>
      <Link to="/newevent"><HeaderItem title="Add new event" /></Link>
    </div>
  )
}

export default HeaderBar
