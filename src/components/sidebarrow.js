import React from 'react'

function SidebarRow({ selected, Icon, title }) {
   return (
      <div className="flex items-center p-2 cursor-pointer focus:text-red focus:bg-gray-200 hover:bg-gray-200 hover:text-red-500">
         <Icon className="ml-4 hover:text-red-500  "/>
         <h1 className="pl-4 text-black flex-1 font-bold">{title}</h1>
      </div>
   )
}
export default SidebarRow
