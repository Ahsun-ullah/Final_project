import React from 'react'
import loginImg from '../../Assets/loginImg.png'

const ChatInfoSide = () => {
  return (
    <div className="bg-gray-50 pr-4 sm:pr-5 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
      <div className="h-full pl-6 py-6 lg:w-80">
        <div className="h-full relative">
          <div className="m-auto text-center mb-10">
            <img
              className="w-36 h-36 rounded-full m-auto "
              src={loginImg}
              alt=""
            />
            <h2 className="m-auto text-2xl mt-2"> polok intisar </h2>
          </div>
          <div className="mb-2">
            <h4>Attachment</h4>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
            <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInfoSide
