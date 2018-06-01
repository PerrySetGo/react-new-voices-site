import React from 'react'
import LoginComponent from './LoginComponent'
import NewEventForm from './NewEventForm'
import PropTypes from 'prop-types'

class NewEventControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleLoginSubmitConfirm = this.handleLoginSubmitConfirm.bind(this) //still not sure i 100% get this
  }

  handleLoginSubmitConfirm(){
    this.setState({formVisibleOnPage:true})
  }

  render(){
    let currentlyVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewEventForm onNewEventCreation={this.props.onNewEventCreation}/>
    }
    else {
      currentlyVisibleContent = <LoginComponent onLoginConfirmation={this.handleLoginSubmitConfirm}/>
    }

    return(
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

NewEventControl.propTypes = {
  onNewEventCreation: PropTypes.func
}

export default NewEventControl
