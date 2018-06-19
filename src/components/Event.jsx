import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Event(props){
  var route;
  const eventInformation =   <tr>
      <td>
        {props.date}
      </td>
      <td>
        {props.time}
        {props.message}
      </td>
      <td>
        {props.location}
      </td>
      <td>
        {props.track}
      </td>
      <td>
        {props.title} {props.attendance} <button>Go!</button>
      </td>
      <td>
          {route}
      </td>
    </tr>;

//if the route is admin, show edit button and then take user to edit form

  if (props.currentRouterPath === '/admin'){
    route = <button type="submit">Edit</button>;
    return(
    <div onClick={() => {props.onEventSelection({date:props.date, time:props.time, message:props.message, location:props.location, track:props.track, title:props.title});}}>
      {eventInformation}
    </div>
    )
  }

  else {
    return(
      <div>
        {ticketInformation}
      </div>
    )
  }
  //create click handler to flip to edit mode here
}

Event.propTypes = {
  date:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  track:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance:PropTypes.bool.isRequired,
  message:PropTypes.string.message,
  currentRouterPath:PropTypes.string,
  onEventSelection:PropTypes.func
}
export default Event
