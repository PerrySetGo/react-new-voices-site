export default (state = {}, action) => {
  console.log("reducer fires");
  switch (action.type) {
  case 'ADD_EVENT':
    console.log("case add event true"); 
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
