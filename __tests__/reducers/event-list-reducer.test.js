import eventListReducer from './../../src/reducers/event-list-reducer';

describe ('eventListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(eventListReducer({}, {type: null })).toEqual({}); 
  });
});
