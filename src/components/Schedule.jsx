import React from 'react'
import ScheduleHeaderItemSort from './ScheduleHeaderItemSort'
import Event from './Event'

var masterScheduleHeaderItemList = [
  {title:'Day'},
  {title:'Time'},
  {title:'Locations'},
  {title:'Track'},
]


var masterEventList = [
  {
    day:'12/12/2019',
    time:'10am-11am',
    location:'green room',
    track:'data track',
    title:'props vs. state in react',
    attendance:'true'
  },
  {
    day:'12/12/2019',
    time:'10am-11am',
    location:'red roomyyy',
    track:'UI track',
    title:'CSS objects in react',
    attendance:'false'
  },
  {
    day:'12/13/2019',
    time:'12pm-2pm',
    location:'yellow room',
    track:'People Skills',
    title:'Salary Negotiation',
    attendance:'true'
  }
]

function Schedule(){
  return(
    //table header row contains properties that will be sortable at some point - EXCEPT title, which is why it is hardcoded

    <table>
      {masterScheduleHeaderItemList.map((scheduleHeaderItemSort, index) =>
        <th>
          <ScheduleHeaderItemSort
            title = {scheduleHeaderItemSort.title}
            key = {index}
          /></th>
      )}
      <th>Title</th>
      {masterEventList.map((event, index) =>
        <Event
          day={event.day}
          time={event.time}
          location={event.location}
          track={event.track}
          title={event.title}
          attendance={event.attendance}
          key={index}
        />
      )}
    </table>
  )}

export default Schedule
