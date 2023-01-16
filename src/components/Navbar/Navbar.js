import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
    console.log('clicked')
    navigate('/Login')
  }

  return (
    <div>
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
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal">
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
            <li></li>

            <li className="text-transparent -mr-7 ">
              {user ? (
                <div>
                  <img
                    className="h-12 w-12 rounded-full "
                    src={user?.photoURL}
                    alt=""
                  />
                  <p className="text-sm font-bold text-black">
                    {user?.displayName}
                  </p>
                  <div>
                    <button
                      className="text-gray-800 font-medium hover:bg-gray-900 hover:text-gray-300 shadow-lg rounded-full px-3 h-7 w-auto my-auto ml-8"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/Login"></Link> || (
                  <Link className="text-black text-xl" to="/Register">
                    Signin
                  </Link>
                ) || (
                  <Link className="text-black text-xl" to="/Login">
                    Login
                  </Link>
                )
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
