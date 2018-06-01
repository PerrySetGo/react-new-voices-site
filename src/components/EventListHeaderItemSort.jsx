import React from 'react'
import PropTypes from 'prop-types'

//I have this long funny name as I will be how the EventList can be sorted when I grow up.

function EventListHeaderItemSort(props) {
  return (
    <h3>{props.title} &and;&or;</h3>
  )
}

EventListHeaderItemSort.propTypes = {
  title: PropTypes.string.isRequired
}

export default EventListHeaderItemSort
