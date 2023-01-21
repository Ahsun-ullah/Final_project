import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase.init'
import { ContextChat } from '../ContextApi/ContextChat'
import Message from './Message'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ContextChat)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data?.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  console.log(messages)
  return (
    <div>
      {messages?.map((message) => (
        <Message message={message} key={message?.id}></Message>
      ))}
    </div>
  )
}

export default Messages
