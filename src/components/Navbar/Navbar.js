import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
//import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { ContextAuth } from "../ContextApi/ContextAuth";

const Navbar = () => {
  const { currentUser } = useContext(ContextAuth);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    signOut(auth);
    console.log("clicked");
    navigate("/Login");
  };

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
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 p-2 text-black shadow "
            >
              <li>
                <Link className="text-xl text-black" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/Profiles">
                  Profiles
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/CreateProfiles">
                  CreateProfiles
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/About">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/Login">
                  Login form
                </Link>
              </li>
              <li>
                <Link className="text-xl text-black" to="/TermsAndConditions">
                  T&C
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn-ghost btn font-serif text-xl normal-case text-slate-900">
            Rap Messaging
          </Link>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <Link className="text-xl text-black" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl text-black" to="/Profiles">
                Profiles
              </Link>
            </li>
            <li>
              <Link className="text-xl text-black" to="/CreateProfiles">
                CreateProfiles
              </Link>
            </li>
            <li>
              <Link className="text-xl text-black" to="/UserSide">
                Chat
              </Link>
            </li>
            <li></li>

            <li className="-mr-7 text-transparent ">
              {currentUser ? (
                <div>
                  <img
                    className="h-12 w-12 rounded-full "
                    src={currentUser?.photoURL}
                    alt=""
                  />
                  <p className="text-sm font-bold text-black">
                    {currentUser?.displayName}
                  </p>
                  <div>
                    <button
                      className="my-auto ml-8 h-7 w-auto rounded-full px-3 font-medium text-gray-800 shadow-lg hover:bg-gray-900 hover:text-gray-300"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/Login"></Link> || (
                  <Link className="text-xl text-black" to="/Register">
                    Signin
                  </Link>
                ) || (
                  <Link className="text-xl text-black" to="/Login">
                    Login
                  </Link>
                )
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
