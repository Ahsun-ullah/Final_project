import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ContextChat } from '../ContextApi/ContextChat'
import Message from './Message'

const db = getFirestore()

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ContextChat)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  console.log(messages)
  return (
    
      <div className="messages">
        {messages.map((m) => (
          <Message message={m} key={m.id}></Message>
        ))}
      </div>
  
  )
}

export default Messages
