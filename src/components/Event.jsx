import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Event(props){




  return(
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
  )
}

Event.propTypes = {
  date:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  track:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance:PropTypes.bool.isRequired,
  message:PropTypes.string.message

}
export default Event
