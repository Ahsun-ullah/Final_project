import React from 'react'
import loginImg from '../../Assets/loginImg.png'

const UserSide = () => {
  return (
    <div>
      <div>
        <div className="relative min-h-screen flex flex-col bg-gray-50">
          {/*
            nav section starts here
             */}
          <nav className="flex-shrink-0 bg-red-400">
            <div className="relative flex items-center justify-between h-16">
              <div>
                <div></div>
                <div className="flex lg:hidden">
                  <button className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">
                    <svg
                      className="block h-6 w-6"
                      xmlns="https://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h8m-8 6h16"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:block lg:w-80">
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      <a
                        href="a"
                        className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white"
                      >
                        Chat
                      </a>
                    </div>
                    <div className="mi-4 relative flex-shrink-0">
                      <div>
                        <button className="bg-red-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                          <img
                            className="h-8 w-8 rounded-full "
                            src={loginImg}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/*
            nav section ends here
             */}

          {/*
            inbox list section starts here
             */}
          <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
            <div className="flex-1 min-w-0 bg-white xl:flex">
              <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
                <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <div className="h-full relative">
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 mb-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={loginImg}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="a" className="focus:outline-none">
                          <span className="absolute inset-0"></span>
                          <p className="text-sm font-bold text-red-600">
                            Ahsun Ullah
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            student
                          </p>
                        </a>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="relative">
                        <input
                          name="search"
                          className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full py-1 border"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    {/*Search box end */}

                    {/*user inbox*/}
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={loginImg}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="a" className="focus:outline-none">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              RAdWan
                            </p>
                            <div className="text-gray-400 text-xs">
                              12:35 AM
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              Hey Friends
                            </p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/*user inbox end */}
                    {/*user inbox*/}
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={loginImg}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="a" className="focus:outline-none">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              RAdWan
                            </p>
                            <div className="text-gray-400 text-xs">
                              12:35 AM
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              Hey Friends
                            </p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/*user inbox end */}
                    {/*user inbox*/}
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={loginImg}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="a" className="focus:outline-none">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              RAdWan
                            </p>
                            <div className="text-gray-400 text-xs">
                              12:35 AM
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              Hey Friends
                            </p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/*user inbox end */}
                    {/*user inbox*/}
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={loginImg}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="a" className="focus:outline-none">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              RAdWan
                            </p>
                            <div className="text-gray-400 text-xs">
                              12:35 AM
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              Hey Friends
                            </p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/*user inbox end */}
                  </div>
                </div>
              </div>
              {/*inbox list section ends here*/}

              {/*user chat  option start*/}
              <div className="flex-1 p:2 sm:pb-5 justify-between flex flex-col h-screen xl:flex">
                {/*user chat nav option start*/}
                <div className="flex sm:items-center justify-between py-3 border-b border-gray-300 p-3">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor pointer"
                      src={loginImg}
                      alt=""
                    />
                    <div className="flex flex-col leading-tight">
                      <div className="text-1xl mt-1 flex items-center">
                        <span className="text-gray-700 font-semibold mr-3">
                          Polok intisar
                        </span>
                        <span className="text-green-500 font-medium">
                          online
                        </span>
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

                {/*user msg option starts*/}
                <div
                  id="messages"
                  className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                >
                  {/* First  message start (left)*/}
                  <div className="chat-message">
                    <div className="flex items-end ">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                            lorem ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        className="w-6 h-6 rounded-full order-1"
                        src={loginImg}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* First  message end (left)*/}
                  {/* second  message start (right)*/}
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-300 text-gray-600">
                            lorem ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        className="w-6 h-6 rounded-full order-1"
                        src={loginImg}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* second  message end (right)*/}
                  {/*   message  bottom part start */}
                  <div className="border-t-2 border-gray-200 px-4 pt-4 mb-16">
                    <div className="relative flex">
                      <span className="absolute inset-y-0 flex items-center">
                        <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-500 ">
                          <span>MIC</span>
                        </button>
                      </span>
                      <input
                        placeholder="write something"
                        className="focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-500 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200"
                        type="text"
                      />
                    </div>
                  </div>
                  {/*   message  bottom part end */}
                </div>
                {/*user msg option end*/}
              </div>
              {/*user chat  option start*/}
            </div>

            {/*user sidebar option start*/}
            <div className="bg-gray-50 pr-4 sm:pr-5 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
              <div className="h-full pl-6 py-6 lg:w-80">
                <div className="h-full relative">
                  <div className="m-auto text-center mb-10">
                    <img
                      className="w-36 h-36 rounded-full m-auto "
                      src={loginImg}
                      alt=""
                    />
                    <h2 className="m-auto text-2xl mt-2"> polok intisar </h2>
                  </div>
                  <div className="mb-2">
                    <h4>Attachment</h4>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*user sidebar option end*/}


          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSide
