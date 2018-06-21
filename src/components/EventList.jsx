import React from 'react'
import EventListHeaderItemSort from './EventListHeaderItemSort'
import Event from './Event'
import PropTypes from 'prop-types'


//this should be passed down from app so it is available to admin and eventlist.
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
      {Object.keys(props.eventList).map(function(eventId){
        var event = props.eventList[eventId]
        return <Event
          date={event.date}
          time={event.time}
          location={event.location}
          track={event.track}
          title={event.title}
          message={event.message}
          key={eventId}
          eventId={eventId}
          currentRouterPath={props.currentRouterPath}
          onEventSelection={props.onEventSelection}
        />
      })}

    </table>
  )}


EventList.propTypes = {
  eventList:PropTypes.object,
  currentRouterPath:PropTypes.string,
  onEventSelection:PropTypes.func
}

export default EventList
