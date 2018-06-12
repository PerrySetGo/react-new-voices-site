import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment';

function Event(props){
  var rightnow = new Moment();
  var futureMoment = new Moment(props.day + " " + props.time);
  var message = "";
  if (futureMoment.diff(rightnow, 'hours', true) <= 2){
    message = "event starts in 2 hours";
  }

  return(
    <tr>
      <td>
        {props.day}
      </td>
      <td>
        {props.time}
        {message}
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
  )
}


Event.propTypes = {
  day:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  track:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance:PropTypes.bool.iSrequired
}
export default Event
