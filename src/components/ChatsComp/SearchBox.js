import React, { useContext, useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { ContextAuth } from '../ContextApi/ContextAuth'
import { db } from '../../firebase.init'

const SearchBox = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(ContextAuth)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username),
    )

    try {
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (event) => {
    event.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'chats', combinedId))

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        //create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })
      }
    } catch (err) {
      setErr(true)
    }

    setUser(null)
    setUsername('')
  }
  return (
    <div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            className=" block w-full pl-10 sm:text-sm border-gray-100 rounded-full py-1 mb-4 border"
            placeholder="Search"
            onKeyDown={handleKey}
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </div>
      </div>
      {err && <span className="text-red-700 underline">User not found!</span>}
      {user && (
        <div
          className="flex bg-blue-100 p-2 rounded hover:bg-gray-200 mb-4"
          onClick={handleSelect}
        >
          <img
            className="h-10 w-10 rounded-full mr-2"
            src={user?.photoURL}
            alt=""
          />

          <div className="flex items-center">
            <span className="text-sm font-bold text-red-600">
              {user?.displayName}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
