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
  getFirestore,
} from 'firebase/firestore'
import { ContextAuth } from '../ContextApi/ContextAuth'

const db = getFirestore()

const SearchBox = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(ContextAuth)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName:firstName', '==', username),
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

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {
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
    } catch (err) {}

    setUser(null)
    setUsername('')
  }
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type="text"
          className=" block w-full pl-10 sm:text-sm border-gray-100 rounded-full py-1 border"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="flex justify-start flex-row" onClick={handleSelect}>
          <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-red-600">
              {user?.displayName}
            </span>
            <div className="text-gray-400 text-xs">12:35 AM</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
