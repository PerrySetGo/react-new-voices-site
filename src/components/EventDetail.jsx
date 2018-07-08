import React from 'react'
import PropTypes from 'prop-types'

function EventDetail(props){
  return(
    <div>
      <h2>Event Details</h2>
      <table>
        <tr>
          <td>Date</td>
          <td>{props.selectedEvent.date}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>{props.selectedEvent.time}</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>{props.selectedEvent.location}</td>
        </tr>
        <tr>
          <td>Track</td>
          <td>{props.selectedEvent.track}</td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{props.selectedEvent.title}</td>
        </tr>
      </table>
    </div>
  )
}

EventDetail.propTypes ={
  selectedEvent:PropTypes.object
}

export default EventDetail
