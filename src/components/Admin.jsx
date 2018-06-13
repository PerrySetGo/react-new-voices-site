import React from 'react'
import PropTypes from 'prop-types';
import EventList from './EventList'

function Admin(props){
  console.log("admin comp " + props.currentRouterPath);
  return (
    <div>
      <h2>Admin</h2>
      <EventList
      eventList = {props.eventList}
      currentRouterPath={props.currentRouterPath}
      />
    </div>
  )
}

export default Admin

Admin.propTypes = {
  eventList:PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}
