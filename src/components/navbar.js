import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { BiHomeAlt, BiHeartSquare} from 'react-icons/bi'
import {MdWifiTethering} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai"
import {useDataLayerValue} from "../DataLayer"
import SideBarOption from "./SideOption"

function Navbar() {

  const [{playlists}, dispatch] = useDataLayerValue()

  return (
    <div className=" w-1/3 lg:w-1/5 bg-black text-gray-400 h-screen pl-4 cursor-pointer sticky fixed">
      <nav className="side">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
      alt="spotify" className="p-2 h-16 mt-3"/>
      <ul className="pl-5">
          <li className="font-bold flex  hover:text-white mt-2"><BiHomeAlt className="w-6 h-6 mr-2 hover:text-gray-400 " />Home</li>
          <li className="font-bold  hover:text-white mt-3 "><SearchOutlinedIcon className="mr-2" />Search</li>
      <li className="font-bold  hover:text-white mt-3">Your Library</li>
      <li className="font-bold  hover:text-white pt-6 mt-3"><AddBoxIcon className="mr-2 "/>Create Playlist</li>
      <li className="font-bold  hover:text-white flex mt-3"><AiFillHeart className="w-6 p-1 h-6 mr-2 rounded bg-gradient-to-r from-blue-700 via-blue-500- to-blue-200 text-white"/>Liked Songs</li>
      <li className="font-bold  hover:text-white flex mt-3"><MdWifiTethering className=" w-6 h-6 bg-green-800 text-green-300 rounded mr-2"/>Your Episodes</li>
    </ul>
    <hr className="mt-6 mr-4"/>
    {playlists?.items?.map((playlist) =>(
      <SideBarOption title={playlist.name}/>
    )) }
      </nav>
    </div>
  )
}

export default Navbar
