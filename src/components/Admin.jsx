import React from 'react'
import PropTypes from 'prop-types'
import EventList from './EventList'
import EventDetail from './EventDetail'
import { connect } from 'react-redux'

function Admin(props){
  let optionalSelectedEventContent = null

  if (props.selectedEvent.length > 0){ //need to change to length > 0 as it will never be null thx to redux.
    optionalSelectedEventContent = <EventDetail selectedEvent={props.eventList[props.selectedEvent]}/>
  }

  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedEventContent}
      <EventList
        eventList = {props.eventList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  )
}

Admin.propTypes = {
  eventList:PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedEvent: PropTypes.string
}

const mapStateToProps = state => {
  return {
    selectedEvent: state.selectedEvent,
    eventList: state.masterEventList
  }
}

export default connect(mapStateToProps)(Admin);
