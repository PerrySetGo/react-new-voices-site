import React from 'react'
import PropTypes from 'prop-types'

//I have this long funny name as I will be how the schedule can be sorted when I grow up.

function ScheduleHeaderItemSort(props) {
  return (
    <h3>{props.title} &and;&or;</h3>
  )
}

ScheduleHeaderItemSort.propTypes = {
  title: PropTypes.string.isRequired
}

export default ScheduleHeaderItemSort
