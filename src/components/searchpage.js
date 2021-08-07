import React from 'react'
import Artist from './channel'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function SearchPage() {
	return (
		<div className="bg-gradient-to-r from-green-900 via green-900 to-black w-4/5">
			<div className="flow-root cursor-pointer">
				<ArrowBackIosIcon className="ml-3 mt-3 float-left border-2 border-black bg-black text-white rounded-full pl-1" />
				<input className="" placeholder="Artist, songs or podcasts"/>
				<PersonOutlineOutlinedIcon className="flex float-right align-content:right text-white border-2 rounded-full border-black mr-3 mt-3 bg-black" />
			</div>
			<div className="">
			<Artist
					image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gSJbAkeqdt1vOXGdQiGUswHaFj%26pid%3DApi&f=1"
			name="Drake"
			verified
			tag="Artist"
			/>
		</div>
			
		</div>
	)
}

export default SearchPage
