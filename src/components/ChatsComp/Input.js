import React, { useContext, useState } from 'react'
import {
  arrayUnion,
  doc,
  getFirestore,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { ContextChat } from '../ContextApi/ContextChat'

const db = getFirestore()

const Input = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(ContextAuth)
  const { data } = useContext(ContextChat)

  const handleSend = async () => {
    if (img) {
      const storage = getStorage()
      const storageRef = ref(storage, uuid())

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            })
          })
        },
      )
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    })

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    })

    setText('')
    setImg(null)
  }
  return (
    <div>
      {/*   message  bottom part start */}
      <div className="border-t-2 border-zinc-300 px-4 pt-4 mb-16">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-zinc-200 ">
              <span></span>
            </button>
          </span>
          <input
            placeholder="write something"
            className=" w-full focus:placeholder-gray-300 text-gray-500 pl-10 placeholder-gray-400 justify-center rounded-full py-3 border-gray-800 mr-4"
            type="text"
          />
          <div type='button' className="flex justify-end my-4 border border-gray-300 rounded-full bg-slate-300 font-medium text-gray-500 px-4 hover:shadow-md hover:bg-gray-500
           hover:text-gray-200">
            <button
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {/*   message  bottom part end */}
    </div>
  )
}

export default Input
