import React from 'react'
import EventListHeaderItemSort from './EventListHeaderItemSort'
import Event from './Event'
import PropTypes from 'prop-types'

var masterEventListHeaderItemList = [
  {title:'Date'},
  {title:'Time'},
  {title:'Locations'},
  {title:'Track'},
]

function EventList(props){
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
      {props.eventList.map((event) =>
        <Event
          date={event.date}
          time={event.time}
          location={event.location}
          track={event.track}
          title={event.title}
          message={event.message}
          key={event.id}
          currentRouterPath={props.currentRouterPath}
          onEventSelection={props.onEventSelection}
        />
        // If the event is happening in less than 2 hours, show a special icon here.
      )}
    </table>
  )}


EventList.propTypes = {
  eventList:PropTypes.array,
  currentRouterPath:PropTypes.string,
  onEventSelection:PropTypes.func
}

export default EventList
