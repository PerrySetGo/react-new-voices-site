import React from 'react'
import HeaderBar from './HeaderBar'
import EventList from './EventList'
import NewEventControl from './NewEventControl'
import Error404 from './Error404'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import Moment from 'moment'
import Admin from './Admin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterEventList: [],
      selectedEvent:null
    };
    this.handleAddingNewEventToList = this.handleAddingNewEventToList.bind(this);
    this.handleChangingSelectedEvent = this.handleChangingSelectedEvent.bind(this);
  }

  handleAddingNewEventToList(newEvent){
    var newMasterEventList = this.state.masterEventList.slice()
    newMasterEventList.push(newEvent)
    this.setState({masterEventList: newMasterEventList});
  }

  handleChangingSelectedEvent(event){
    this.setState({selectedEvent: event});
    console.log(this.state.selectedEvent);
    alert('The selected event is now: ' + this.state.selectedEvent.title);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateEventElapsedWaitTime(),
    300000
  );
}

componentWillUnmount(){
  clearInterval(this.waitTimeUpdateTimer);
}

updateEventElapsedWaitTime() {
  let newMasterEventList = this.state.masterEventList.slice();
  newMasterEventList.forEach((event) =>
    event.message = this.displayIfLessThanTwoHoursToGo((event.date), (event.time)),
  );
  this.setState({masterEventList: newMasterEventList})
}

displayIfLessThanTwoHoursToGo(date, time){
    var rightnow = new Moment();
    var futureMoment = new Moment(date + " " + time);
    var message = "";
    if (futureMoment.diff(rightnow, 'hours', true) <= 2){
      message = "event starts in 2 hours";
    }
    return message
  }

render() {
  return (
    <div>
    <style jsx global>{`
      body {
        font-family: Helvetica;
      }
      .box {
        border: none;
        display: block;
        border-bottom: 2px solid #fff;
        margin-bottom: 10px;
      }
      .box:hover {
        border-bottom: 2px solid #ccc;
        outline: 0;
      }
      a {
        color: #888;
        text-decoration: none;
      }
      `}
      </style>


      <HeaderBar/>
      <Switch>
      <Route exact path='/' render={()=><EventList eventList = {this.state.masterEventList}/> } />
      <Route path='/newevent' render={()=><NewEventControl onNewEventCreation = {this.handleAddingNewEventToList}/>} />
      <Route path='/admin' render={(props)=><Admin
        eventList={this.state.masterEventList}
        currentRouterPath={props.location.pathname}
        onEventSelection={this.handleChangingSelectedEvent}
        selectedEvent={this.state.selectedEvent}
      />} />
      <Route component={Error404} />
      </Switch>
      <Footer/>
      </div>
    )
  }
}
//how can the above be changed to ONLY show the 404 message, as opposed to loading it beneath the rest?
export default App
