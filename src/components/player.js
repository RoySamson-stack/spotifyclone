import React from 'react'
import Navbar from './navbar'
import Body from './body'
import Footer from './footer'

function Player() {
  return (
    <div className="w-screen ">
    <div className="flex ">
       <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Player
