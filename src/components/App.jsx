import React from 'react'
import HeaderBar from './HeaderBar'
import Schedule from './Schedule'
import Footer from './Footer'

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
      <Footer/>
      </div>
    )
  }

  export default App
