import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleLogout = () => {
    signOut(auth)
    console.log('clicked')
  }

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
                <Link className="text-black text-xl" to="/Profiles">
                Profiles
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/CreateProfiles">
                CreateProfiles
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
                <Link className="text-black text-xl" to="/Login">
                  Login form
                </Link>
              </li>
              <li>
                <Link className="text-black text-xl" to="/TermsAndConditions">
                  T&C
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
              <Link className="text-black text-xl" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Profiles">
              Profiles
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/CreateProfiles">
              CreateProfiles
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/UserSide">
              Chat
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Login">
              Login
              </Link>
            </li>
            <li>
              <Link className="text-black text-xl" to="/Register">
              SignIn
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-ghost btn-circle text-black normal-case "
                >
                  <p className="text-black text-xl">logOut</p>
                </button>
              ) : (
                <Link className="text-black text-xl" to="/Login"></Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
