import { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.init'
import { onAuthStateChanged } from 'firebase/auth'

export const ContextAuth = createContext()

export const ContextAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    })

    return () => {
      sub()
    }
  }, [])

  return (
    <ContextAuth.Provider value={{ currentUser }}>
      {children}
    </ContextAuth.Provider>
  )
}
