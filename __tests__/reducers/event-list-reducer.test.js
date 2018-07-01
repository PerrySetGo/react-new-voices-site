import eventListReducer from './../../src/reducers/event-list-reducer';
import c from './../../src/constants';

describe ('eventListReducer', () => {

  let action;

  const sampleEventData = {
    date: '12/12/2017',
    time: '10:10:30 am',
    location: 'Green Room',
    track: 'ui track',
    title: 'ui testing workshop',
    id:0
  }

  test('Should return default state if no action type is recognized', () => {
    expect(eventListReducer({}, {type: null })).toEqual({});
  });

  test ('Should succcessfully add new event to masterEventList', () =>{
    const {date, time, location, track, title, id} = sampleEventData;
    action = {
      type: 'c.ADD_EVENT',
      date: date,
      time: time,
      location:location,
      track: track,
      title: title,
      id: id
    };

    expect(eventListReducer({}, action)).toEqual({
      [id] : {
        date: date,
        time: time,
        location: location,
        track: track,
        title: title,
        id: id
      }
    });
  });
});
