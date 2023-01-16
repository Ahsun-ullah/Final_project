import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import auth from '../../firebase.init'

const RequireAuth = ({ children }) => {
  const [currentUser ] = useAuthState(auth);

  if (!currentUser ) {
    return <Navigate to="/Login" ></Navigate>
  }
  return children
}

export default RequireAuth
