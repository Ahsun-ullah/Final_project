import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase.init'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { ContextChat } from '../ContextApi/ContextChat'

const ChatList = () => {
  const [chats, setChats] = useState([])

  const { currentUser } = useContext(ContextAuth)
  const { dispatch } = useContext(ContextChat)

  useEffect(() => {
    const getChats = () => {
      const unSub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc?.data())
      })
      return () => {
        unSub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u })
  }

  return (
    <div>
      {Object?.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        ?.map((chat) => (
          <div
            className="flex mb-4"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              className="h-11 w-11 rounded-full "
              src={chat[1].userInfo?.photoURL}
              alt=""
            />
            <div className="ml-4">
              <span className="text-sm font-bold text-red-800">
                {chat[1].userInfo?.displayName}
              </span>
              <p className="-mt-1 text-sm text-gray-500 truncate">
                <span className="text-gray-900 font-serif">you:</span>{' '}
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ChatList
