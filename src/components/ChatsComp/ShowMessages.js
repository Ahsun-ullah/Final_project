import { useContext } from 'react'
import loginImg from '../../Assets/loginImg.png'
import { ContextChat } from '../ContextApi/ContextChat'
import Input from './Input'
import Messages from './Messages'

const ShowMessages = () => {
  const { data } = useContext(ContextChat)
  return (
    <div className="flex-1 min-w-0 bg-zinc-100 xl:flex">
      <div className="flex-1 p:2 sm:pb-5 justify-between flex flex-col h-screen xl:flex">
        {/*user chat nav option start*/}
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-zinc-300 p-3">
          <div className="flex items-center space-x-4">
            <img
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor pointer"
              src={loginImg}
              alt=""
            />
            <div className="flex flex-col leading-tight">
              <div className="text-1xl mt-1 flex items-center">
                <span className="text-gray-700 font-semibold mr-3">
                  {data.user?.displayName}
                </span>
                <span className="text-green-500 font-medium">online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500hover:bg-gray-300 focus:outline-none">
              <span>audio</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500hover:bg-gray-300 focus:outline-none">
              <span>video</span>
            </button>
          </div>
        </div>
        {/*user chat nav option ends*/}

        <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <Messages></Messages>
          <Input></Input>
        </div>
      </div>
    </div>
  )
}

export default ShowMessages
