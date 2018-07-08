import { initialState } from './../../src/constants/InitialState';
import showWeatherReducer from './../../src/reducers/show-weather-reducer';


describe('showWeatherReducer', () => {
  it('Should load initialState correctly', () => {
    console.log(initialState);
    expect(showWeatherReducer(initialState, { type: null })).toEqual(initialState);
  });
});


// expect(lyricChangeReducer(initialState, { type: null })).toEqual(initialState);
