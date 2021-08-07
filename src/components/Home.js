import React from 'react'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MusicCard from './MscCard'

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-900 via green-900 to-black w-4/5">
      <div className="">
      <div className="flow-root cursor-pointer">
      <ArrowBackIosIcon className="ml-3 mt-3 float-left border-2 border-black bg-black text-white rounded-full pl-1"/>
      <PersonOutlineOutlinedIcon className="flex float-right align-content:right text-white border-2 rounded-full border-black mr-3 mt-3 bg-black"/>
      </div>
  <div className="grid  grid-flow-col md:grid-col-2 lg:grid-cols-6 grid-rows-5 gap-8 pl-6 mt-12">
  <MusicCard 
  className=""
  title="Asakaa"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/asakaa-Yaw-TOG.jpg"
list="Subsaharan music from west to east and center to south"
  />
   <MusicCard 
  className=""
  title="Listen up Kenya"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/Listen_Up_Kenya.jpg"
list="Subsaharan music from west to east and center to south"
  />
   <MusicCard 
  className=""
  title="listen up Africa"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/Listen_Up_Africa.jpg"
list="Subsaharan music from west to east and center to south"
  />
     <MusicCard 
  className=""
  title="Africa heat Playlist"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/african-heat-rema-2021.jpg"
list="Subsaharan music from west to east and center to south"
  />
     <MusicCard 
  className=""
  title="Afropop Playlist"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/afropop-teni-2021.jpg"
list="Subsaharan music from west to east and center to south"
  />
       <MusicCard 
  className=""
  title="Phenomenal Woman Playlist"
image="https://storage.googleapis.com/pr-newsroom-wp/1/2021/02/phenomenal-woman-arya-starr.jpg"
list="Subsaharan music from west to east and center to south"
  />
  </div>
      </div>
    </div>
  )
}

export default Home
