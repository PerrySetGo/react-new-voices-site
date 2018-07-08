import { initialState } from './../../src/constants/InitialState';

export default (state = initialState, action) => {
  switch (action.type){
    case 'PARSE_WEATHER':
    let newState = {
      name:state.name,
      temp:state.main.temp,
      description:state.weather[0].description,
      iconCode:state.weather[0].icon
    }
    return newState;
    default:
      return state;
  }
};
