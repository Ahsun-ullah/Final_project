import React, { useContext, useEffect, useRef } from 'react'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { ContextChat } from '../ContextApi/ContextChat'

const Message = (message) => {
  const { currentUser } = useContext(ContextAuth)
  const { data } = useContext(ContextChat)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && 'owner'}`}
    >
      {/* First  message start (left)*/}
      <div className="chat-message">
        <div className="flex items-end ">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <p className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                {message.text}
              </p>
              {message.img && <img src={message.img} alt="" />}
            </div>
          </div>
          <img
            className="w-6 h-6 rounded-full order-1"
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
          <span>just now</span>
        </div>
      </div>
      {/* First  message end (left)*/}
    </div>
  )
}

export default Message
