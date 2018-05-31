import React from 'react'

function NewEventForm(){
  return (
    <div>
      <form>
        <input
          type='date'
          id='date'
          placeholder='Date'/>
        <input
          type='time'
          id='time'
          placeholder='Time'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          type='text'
          id='track'
          placeholder='Track'/>
        <input
          type='text'
          id='title'
          placeholder='Title'/>
        <button>Go!</button>
      </form>
    </div>
  )
}

export default NewEventForm
