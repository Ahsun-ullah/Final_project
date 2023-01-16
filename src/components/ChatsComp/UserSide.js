import React from 'react'
import ChatInfoSide from './ChatInfoSide'
import InboxList from './InboxList'
import ShowMessages from './ShowMessages'

const UserSide = () => {
  return (
    <div>
      <div>
        <div className="relative min-h-screen flex flex-col bg-gray-50">
          <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
            <InboxList></InboxList>
            <ShowMessages></ShowMessages>
            <ChatInfoSide></ChatInfoSide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSide
