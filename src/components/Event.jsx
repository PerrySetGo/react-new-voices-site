import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return(
  <tr>
      <td>
        {props.day}
      </td>
      <td>
        {props.time}
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
  );
}


Event.propTypes = {
  day:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  track:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  attendance:PropTypes.bool.iSrequired
}
export default Event;
