import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.init'

export const ContextAuth = createContext()

export const ContextAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return () => {
      unSub()
    }
  }, [])

  return (
    <ContextAuth.Provider value={{ currentUser }}>
      {children}
    </ContextAuth.Provider>
  )
}
