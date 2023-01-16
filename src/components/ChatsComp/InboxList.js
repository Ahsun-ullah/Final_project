import React from 'react'
import ChatList from './ChatList'
import ChatsNav from './ChatsNav'
import SearchBox from './SearchBox'

const InboxList = () => {
  return (
    <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
      <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
        <div className="h-full relative">
          <ChatsNav></ChatsNav>
          <SearchBox></SearchBox>
          <ChatList></ChatList>
        </div>
      </div>
    </div>
  )
}

export default InboxList
