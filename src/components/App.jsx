import React from 'react'
import HeaderBar from './HeaderBar'
import EventList from './EventList'
import NewEventControl from './NewEventControl'
import Error404 from './Error404'
import Footer from './Footer'
import { Switch, Route, withRouter } from 'react-router-dom'
import Moment from 'moment'
import Admin from './Admin'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';

class App extends React.Component {
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
    // console.log(this.state.masterEventList);
    // var newMasterEventList = Object.assign({}, this.state.masterEventList)
    // Object.keys(newMasterEventList).forEach(eventId => {
    //   newMasterEventList[eventId].message = this.displayIfLessThanTwoHoursToGo((newMasterEventList[eventId].date), (newMasterEventList[eventId].time))})
    // this.setState({masterEventList: newMasterEventList})
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
        border-bottom: '2px solid #fff';
        margin-bottom: '10px';
      }
      .box:hover {
        border-bottom: '2px solid #ccc';
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
          <Route exact path='/' render={()=><EventList eventList = {this.props.masterEventList}/> } />
          <Route path='/newevent' render={()=><NewEventControl />} />
          <Route path='/admin' render={(props)=><Admin
            currentRouterPath={props.location.pathname}
          />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}
//how can the above be changed to ONLY show the 404 message, as opposed to loading it beneath the rest?

App.propTypes = {
  masterEventList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterEventList: state.masterEventList
  };
};

export default withRouter(connect(mapStateToProps)(App));
