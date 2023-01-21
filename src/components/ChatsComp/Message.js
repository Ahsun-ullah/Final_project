import React, { useContext, useEffect, useRef } from 'react'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { ContextChat } from '../ContextApi/ContextChat'

const Message = ({ message }) => {
  const { currentUser } = useContext(ContextAuth)
  const { data } = useContext(ContextChat)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])
  return (
    <div ref={ref}>
      {message?.senderId === currentUser?.uid && (
        <div className="flex justify-end mb-4 ">
          <div className="flex justify-between text-xs max-w-xs mx-2">
            <img
              className="flex items-start ml-2 w-8 h-8 rounded-full order-1"
              src={currentUser?.photoURL}
              alt=""
            />
            <div className="flex-col gap-2">
              <p className=" px-2 py-2 mb-2 rounded-lg rounded-br-none bg-gray-200 text-gray-600">
                {message?.text}
              </p>
              {message?.img && <img src={message?.img} alt="" />}
            </div>
          </div>
        </div>
      )}
      {/*left side message */}
      {message?.senderId === data?.user.uid && (
        <>
          <div className="flex justify-start mb-4">
            <div className="flex justify-between text-xs max-w-xs mx-2">
              <img
                className="flex items-end ml-2 w-8 h-8 rounded-full order-1"
                src={data?.user.photoURL}
                alt=""
              />
              <div className="flex-col gap-2">
                <p className=" px-2 py-2 mb-2 rounded-lg rounded-bl-none bg-gray-200 text-gray-600">
                  {message?.text}
                </p>
                {message.img && <img src={message.img} alt="" />}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Message
