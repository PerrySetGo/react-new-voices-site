import rootReducer from './../../src/reducers/index';
import selectedEventReducer from './../../src/reducers/selected-event-reducer';
import eventListReducer from './../../src/reducers/event-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe ("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterEventList:{},
      selectedEvent: {}
    });
  });

  test('Should contain eventListReducer logic', () => {
    expect(store.getState().masterEventList).toEqual(eventListReducer(undefined, {type: null}));
    });

  test('Should contain selectedEventReducer logic', () => {
    expect(store.getState().selectedEvent).toEqual(selectedEventReducer(undefined, {type: null }));
  });
});
