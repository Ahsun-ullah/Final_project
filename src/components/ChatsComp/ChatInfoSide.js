import React, { useContext } from 'react'
import { ContextChat } from '../ContextApi/ContextChat'

const ChatInfoSide = ({ message }) => {
  const { data } = useContext(ContextChat)
  console.log(message)
  return (
    <div className="bg-gray-50 pr-4 sm:pr-5 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
      <div className="h-full pl-6 py-6 lg:w-80">
        <div className="h-full relative">
          <p className="flex justify-center mb-4 text-red-800 font-bold font-sans">
            #User Information#
          </p>
          <div className="m-auto text-center mb-10">
            <img
              className="w-24 h-24 rounded-full m-auto "
              src={data?.user?.photoURL}
              alt=""
            />
            <h2 className="m-auto text-2xl mt-2">
              {' '}
              {data?.user?.displayName}{' '}
            </h2>
          </div>
          <div className="mb-2">
            <h4>Attachment</h4>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {
              <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                {message?.img && <img src={message?.img} alt="" />}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInfoSide
