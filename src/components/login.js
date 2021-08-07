import React from 'react'
import {loginUrl} from './spotify'

function Login() {
  return (
    <div className="place-items-center grid  w-full h-screen bg-black">
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className=""
        alt="spotify" />
      <a href={ loginUrl} className="p-4 gren rounded-full font-bold text-white no-unerline">LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
