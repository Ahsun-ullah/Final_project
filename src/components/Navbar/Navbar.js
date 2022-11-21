import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gray-200">
      <div className="navbar bg-blue-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn border-transparent bg-blue-300 text-black lg:hidden "
            >
              <p>=</p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52 "
            >
              <li>
                <Link className="text-black text-xl" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/Crud">
                  Crud
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/Activity">
                  Activity
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/About">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/Form">
                  Login form
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/Register">
                  Register form
                </Link>
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
              <Link className="text-black text-xl" to="/Crud">
                Crud
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Activity">
                Activity
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Form">
                Login form
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Register">
                Register form
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle text-black normal-case ">
          <p className="text-black text-xl">logOut</p>
        </button>
      </div>
    </div>
  )
}

export default Header
