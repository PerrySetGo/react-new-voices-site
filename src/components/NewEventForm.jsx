import React from 'react'
import { connect } from 'react-redux';

function NewEventForm(props){
  //init empty vars
  let _date = null
  let _time = null
  let _location = null
  let _track = null
  let _title = null

  function handleNewEventFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault()
    //action
    const action = {
      type:'ADD_EVENT',
      id: null, //will become UUID
      date: _date.value,
      time: _time.value,
      location: _location.value,
      track: _track.value,
      title: _title.value
    };
    dispatch(action); 
    _date.value = ''
    _time.value = ''
    _location.value = ''
    _track.value = ''
    _title.value = ''

  }

  return (
    //refactor to dropdowns and other types as necessary
    <div>
      <form onSubmit={handleNewEventFormSubmission}>
        <input
          type='date'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input}}
        />
        <input
          type='time'
          id='time'
          placeholder='Time'
          ref={(input) => {_time = input}}
        />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input}}
        />
        <input
          type='text'
          id='track'
          placeholder='Track'
          ref={(input) => {_track = input}}
        />
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input}}
        />
        <button type='submit'>Go!</button>
      </form>
    </div>
  )
}

// NewEventForm = connect()(NewEventForm);
// export default NewEventForm

export default connect()(NewEventForm);
