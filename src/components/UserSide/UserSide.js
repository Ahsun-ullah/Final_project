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
            chat section starts here
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
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <input 
                          name='search'
                          className='focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full py-1 border'
                          placeholder='Search'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSide
