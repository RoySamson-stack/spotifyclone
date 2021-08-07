import React from "react"


function Artist({image, name, tag}){
  return (
    <div className="items-center block rounded bg-gray-900 mt-12 h-56 m-4">
      <img className="w-24 rounded-full pt-4 pl-6" src={image} alt={name} />
      <p className="text-white font-bold text-3xl ml-12 mt-4">{name}</p>
      <div class="rounded-full py-1 px-6 bg-black text-white w-24 mt-6 ml-12">{tag}</div>
    </div>
  )
}
  export default Artist