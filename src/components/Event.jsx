import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import c from './../src/constants';

function Event(props){

function handleSavingSelectedEvent(eventId){
  const { dispatch } = props;
  const action = {
    type:'c.SELECT_EVENT',
    eventId:eventId
  };
  dispatch(action);
}


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
      {props.title} <button>Go!</button>
    </td>
    <td>
      {route}
    </td>
  </tr>

  //if the route is admin, show edit button and then take user to edit form

  if (props.currentRouterPath === '/admin'){
    route = <button type="submit">Edit</button>
    return(
      <div onClick={() => {handleSavingSelectedEvent(props.eventId);}}>
        {eventInformation}
      </div>
    )
  }

  else {
    return(
      <div>
        {eventInformation}
      </div>
    )
  }
  //create click handler to flip to edit mode here
}

Event.propTypes = {
  eventId: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  track:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message:PropTypes.string.message,
  currentRouterPath:PropTypes.string,
  onEventSelection:PropTypes.func
}
export default connect()(Event);
