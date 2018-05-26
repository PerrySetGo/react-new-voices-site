import React from 'react'
import PropTypes from 'prop-types'

function ScheduleHeaderItemSort(props) {
  return (
    <h3>{props.title} &and;&or;</h3>
  )
}

ScheduleHeaderItemSort.propTypes = {
  title: PropTypes.string.isRequired
}

export default ScheduleHeaderItemSort
