import React from "react"

const Navbar = () => {
  return (
    <div className="flex bg-black h-[50px]">
      <div className="max-w-[1200px] mx-auto flex justify-between ">
        <div>
          <h1 className="text-3xl font-satisy text-white pr-10 pt-2">Saurabh Shukla</h1>
        </div>
        <div className="flex pl-10 pt-4">
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Home</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Sessions</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Guitar lessons</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Skype lessons</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Media</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Contact</li>
          <li className="list-none text-gray-300 font-satisy hover:text-white pr-4">Shop</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
