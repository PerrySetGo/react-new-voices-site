export default (state = {}, action) => {
  switch (action.type){
    case 'SELECT_EVENT':
      return action.eventId;
    default:
      return state;
  }
};
