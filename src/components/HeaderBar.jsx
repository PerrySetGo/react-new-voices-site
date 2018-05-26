import React from 'react'
import HeaderItem from './HeaderItem'

function HeaderBar(){

  var headerStyles = {
    backgroundColor:'#ecf0f1',
    border: '1px solid black',
    fontFamily:'sans-serif',
    width:'100%',
    textAlign: 'justify'
  }

  return(
    <div style={headerStyles}>
      <HeaderItem title="About" />
      <HeaderItem title="Register" />
      <HeaderItem title="See all Sessions" />
      <HeaderItem title="Sign Up" />
    </div>
  )
}

export default HeaderBar
