import selectedEventReducer from './selected-event-reducer';
import eventListReducer from './event-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedEvent: selectedEventReducer,
  masterEventList: eventListReducer
});

export default rootReducer;
