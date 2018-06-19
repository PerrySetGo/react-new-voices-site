import React from 'react'
import PropTypes from 'prop-types';
import EventList from './EventList';
import EventDetail from './EventDetail';

function Admin(props){
  console.log("admin comp " + props.currentRouterPath);
  let optionalSelectedEventContent = null;
  if (props.selectedEvent != null){
    optionalSelectedEventContent = <EventDetail selectedEvent={props.selectedEvent}/>;
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
  eventList:PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onEventSelection: PropTypes.func.isRequired,
  selectedEvent: PropTypes.object //actually null but whatever
}

export default Admin
