import { initialState } from './../../src/constants/InitialState';
import showWeatherReducer from './../../src/reducers/show-weather-reducer';


describe('showWeatherReducer', () => {
  it('Should load initialState correctly', () => {
    expect(showWeatherReducer(initialState, { type: null })).toEqual(initialState);
  });

  it ('Should correctly retrieve weather information from response object', () => {
//    expect(showWeatherReducer(initialState, { type: 'PARSE_WEATHER' })).toEqual('Portland');
    expect(showWeatherReducer(initialState, { type: 'PARSE_WEATHER' })).toEqual({'name':'Portland', 'temp':81.5, 'description':'few clouds', 'iconCode':'02d'});
  });
});
