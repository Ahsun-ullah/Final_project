import React, { useContext, useState } from 'react'
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { ContextChat } from '../ContextApi/ContextChat'
import { db, storage } from '../../firebase.init'
import images from '../../Assets/images.png'
import attach from '../../Assets/attach.png'

const Input = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(ContextAuth)
  const { data } = useContext(ContextChat)

  //send option

  const handleKey = (event) => {
    event.code === 'Enter' && handleSend()
  }

  const handleSend = async (event) => {
    if (img) {
      const storageRef = ref(storage, uuid())

      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, 'chats', data?.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser?.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          })
        })
      })
    } else {
      await updateDoc(doc(db, 'chats', data?.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser?.uid), {
      [data?.chatId + '.lastMessage']: {
        text,
      },
      [data?.chatId + '.date']: serverTimestamp(),
    })

    await updateDoc(doc(db, 'userChats', data?.user.uid), {
      [data?.chatId + '.lastMessage']: {
        text,
      },
      [data?.chatId + '.date']: serverTimestamp(),
    })

    setText('')
    setImg(null)
  }
  return (
    <div className=" flex justify-between border-t-2 border-zinc-300 pt-4 ">
      <label htmlFor="file">
        <img className="flex mr-2 mt-4 h-6 w-10" src={attach} alt="" />
      </label>
      <input
        onKeyDown={handleKey}
        onChange={(event) => setText(event.target.value)}
        placeholder="write something"
        className="border-gray-800 rounded-full w-full pl-5 h-14 text-gray-500 placeholder-gray-400 focus:placeholder-gray-300 "
        type="text"
        value={text}
      />
      <label htmlFor="file">
        <img
          className="h-12 w-10 py-2 rounded-xl mt-1 ml-3"
          src={images}
          alt=""
        />
      </label>
      <input
        type="file"
        style={{ display: 'none' }}
        id="file"
        onChange={(event) => setImg(event.target.files[0])}
      />

      <button
        className="rounded-md bg-slate-300 font-medium text-gray-500 mx-2 px-2 ml-6 my-2 hover:shadow-md hover:bg-gray-500
           hover:text-gray-200"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  )
}

export default Input
