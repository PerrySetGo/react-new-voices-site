import React from 'react'
import HeaderBar from './HeaderBar'
import EventList from './EventList'
import NewEventControl from './NewEventControl'
import Error404 from './Error404'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import Moment from 'moment'
import Admin from './Admin'
import { v4 } from 'uuid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterEventList: {},
      selectedEvent:null
    }
    this.handleChangingSelectedEvent = this.handleChangingSelectedEvent.bind(this)
  }

  handleChangingSelectedEvent(eventId){
    this.setState({selectedEvent: eventId})
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateEventElapsedWaitTime(),
    10000
    )
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateEventElapsedWaitTime() {
    console.log(this.state.masterEventList);
    var newMasterEventList = Object.assign({}, this.state.masterEventList)
    Object.keys(newMasterEventList).forEach(eventId => {
      newMasterEventList[eventId].message = this.displayIfLessThanTwoHoursToGo((newMasterEventList[eventId].date), (newMasterEventList[eventId].time))})
    this.setState({masterEventList: newMasterEventList})
  }

  displayIfLessThanTwoHoursToGo(date, time){
    var rightnow = new Moment()
    var futureMoment = new Moment(date + ' ' + time)
    var message = ''
    if (futureMoment.diff(rightnow, 'hours', true) <= 2){
      message = 'event starts in 2 hours'
    }else {
      message ='broken'
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
          <Route path='/newevent' render={()=><NewEventControl/>} />
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
