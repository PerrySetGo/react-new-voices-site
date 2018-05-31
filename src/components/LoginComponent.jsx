import React from 'react'
import PropTypes from 'prop-types'

function LoginComponent(props){
  return(
    <div>
      <form>
        <input type="text"/>
        <input type="password"/>
        <button onClick={props.onLoginConfirmation}>Go!</button>
      </form>
    </div>
  )
}

LoginComponent.propTypes = {
  onLoginConfirmation: PropTypes.func
}

export default LoginComponent
