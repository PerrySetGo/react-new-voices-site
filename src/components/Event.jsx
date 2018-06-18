import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Event(props){

//if the route is admin, show edit button and then take user to edit form
var route;
  if (props.currentRouterPath === '/admin'){
    route = <button type="submit">Edit</button>;
  }

  return(
    <div>
    <tr>
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
    </tr>
    <tr>
    {route}
    </tr>
  </div>
  )
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
