import React from 'react'
import HeaderBar from './HeaderBar'
import Schedule from './Schedule'
import NewEventForm from './NewEventForm'
import Error404 from './Error404'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

function App(){
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
      <Schedule/>
      <Switch>
        <Route exact path='/' component = {Schedule} />
        <Route path='/newevent' component = {NewEventForm} />

        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  )
}
//how can the above be changed to ONLY show the 404 message, as opposed to loading it beneath the rest?
export default App
