import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function MusicCard({image, title, list}) {
	return (
			<div className="bg-black text-white p-5 cursor-pointer ">
			<div className="flex relative flow-root ">
			<img className="w-full h-40" src={image} alt="" />
				<PlayArrowIcon
					className="text-white  rounded-full float-right  "
				/>
				<div>
					<h4 className="font-semibold">{title}</h4>
					<p className="text-gray-400">{list}</p>
				</div>
			</div>
			</div>
	)
}

export default MusicCard
