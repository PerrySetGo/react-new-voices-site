import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case 'c.ADD_EVENT':
  const {date, time, location, track, title, id} = action;
    let newState = Object.assign({}, state, {
      [id]: {
        date:date,
        time:time,
        location:location,
        track:track,
        title:title,
        id:id
      }
    });
    return newState;
  default:
    return state;
  }
};
