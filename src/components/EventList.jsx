import React from 'react'
import EventListHeaderItemSort from './EventListHeaderItemSort'
import Event from './Event'
import PropTypes from 'prop-types'

var masterEventListHeaderItemList = [
  {title:'Day'},
  {title:'Time'},
  {title:'Locations'},
  {title:'Track'},
]

function EventList(props){
  console.log(props.eventList);
  return(
    //table header row contains properties that will be sortable at some point - EXCEPT title, which is why it is hardcoded

    <table>
      <tr className="header-row">
        <style jsx>{`
      .header-row {
          background-color: blue;
      }`}</style>


        {masterEventListHeaderItemList.map((eventListHeaderItemSort, index) =>
          <th>
            <EventListHeaderItemSort
              title = {eventListHeaderItemSort.title}
              key = {index} //why is this not getting picked up and causing an error?
            /></th>
        )}
        <th>Title</th>


      </tr>
      {props.eventList.map((event, index) =>
        <Event
          day={event.date}
          time={event.time}
          location={event.location}
          track={event.track}
          title={event.title}
          key={event.id}
        />
        // If the event is happening in less than 2 hours, show a special icon here.

      )

    }
    </table>
  )}


EventList.propTypes = {eventList:PropTypes.array}

export default EventList
