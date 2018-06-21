import React from 'react'
import PropTypes from 'prop-types'
import EventList from './EventList'
import EventDetail from './EventDetail'

function Admin(props){
  let optionalSelectedEventContent = null

  if (props.selectedEvent != null){
    optionalSelectedEventContent = <EventDetail selectedEvent={props.eventList[props.selectedEvent]}/>
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedEventContent}
      <EventList
        eventList = {props.eventList}
        currentRouterPath={props.currentRouterPath}
        onEventSelection={props.onEventSelection}
      />
    </div>
  )
}

Admin.propTypes = {
  eventList:PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onEventSelection: PropTypes.func.isRequired,
  selectedEvent: PropTypes.string
}

export default Admin
