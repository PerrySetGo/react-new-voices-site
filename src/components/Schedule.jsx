import React from "react";
import ScheduleHeaderItemSort from "./ScheduleHeaderItemSort";
import Event from "./Event";

function Schedule(props){
  return(
    <table>
      <th><ScheduleHeaderItemSort
        title="Day"
      /></th>
      <th><ScheduleHeaderItemSort
        title="Time"
      /></th>
      <th><ScheduleHeaderItemSort
        title="Location"
      /></th>
      <th><ScheduleHeaderItemSort
        title="Track"
      /></th>
      <th>Title</th>
      <Event
        day="12/12/2019"
        time="10am-11am"
        location="green room"
        track="data track"
        title="props vs. state in react"
        attendance="true"
      />

      <Event
        day="12/12/2019"
        time="10am-11am"
        location="red room"
        track="UI track"
        title="CSS objects in react"
        attendance="false"
      />
    </table>
  );
}

export default Schedule;
