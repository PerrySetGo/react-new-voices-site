import React from 'react'
import { initialState } from './../../src/constants/InitialState';

class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  //run the action to parse the weather
  //connect to redux or not??
  //how to dispatch the action.
  render(){
    return(
      <div>
      'I am the show weather component'
      </div>
    );
  }
}

export default ShowWeather;
