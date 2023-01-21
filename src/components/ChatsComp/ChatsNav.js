import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init'

const ChatsNav = () => {
  const [user] = useAuthState(auth)
  const stopLoading = (event) => {
    event.preventDefault()
  }

  return (
    <div
      onClick={stopLoading}
      className="relative rounded-lg px-2 py-2 flex items-center space-x-3 bg-gray-100 mb-4"
    >
      <div className="flex-shrink-0">
        <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
      </div>
      <div className="flex-1 min-w-0">
        <a href="a" className="focus:outline-none">
          <span className="absolute inset-0"></span>
          <p className="text-sm font-bold text-red-800">{user?.displayName}</p>
          <p className="text-sm text-gray-500 truncate">student</p>
        </a>
      </div>
    </div>
  )
}

export default ChatsNav
