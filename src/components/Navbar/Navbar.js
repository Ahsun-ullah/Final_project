import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gray-200">
      <div className="navbar bg-blue-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-square btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52 "
            >
              <li>
                <Link className='text-black text-xl' to="/">Home</Link>
              </li>
              <li>
                <Link className='text-black text-xl' to="/Crud">Crud</Link>
              </li>
              <li>
                <Link className='text-black text-xl' to="/Activity">Activity</Link>
              </li>
              <li>
                <Link className='text-black text-xl' to="/About">About Us</Link>
              </li>
              <li>
                <Link className='text-black text-xl' to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl text-slate-900">
            Name
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="text-black text-xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className='text-black text-xl' to="/Crud">Crud</Link>
            </li>
            <li>
              <Link className='text-black text-xl' to="/Activity">Activity</Link>
            </li>
            <li>
              <Link className='text-black text-xl' to="/About">About Us</Link>
            </li>
            <li>
              <Link className='text-black text-xl' to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle text-black normal-case ">
        </button>
      </div>
    </div>
  )
}

export default Header
