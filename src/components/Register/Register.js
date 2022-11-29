import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import registerImg from '../../Assets/registerImg.png'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import app from '../../firebase.init'
import Login from '../Login/Login'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions'
import { Link } from 'react-router-dom'

const auth = getAuth(app)

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [error, setError] = useState('');

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handlePassBlur = (event) => {
    setPassword(event.target.value)
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log('email sent')
    })
  }

  const handleClickForm = () => {
    <Login></Login>
  }

  const handleConditions = () => {
    <TermsAndConditions></TermsAndConditions>
  }

  const handleSubmit = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setEmail('')
        setPassword('')
        verifyEmail()
      })
      .catch((error) => {
        //setError(error.message);
      })
    event.preventDefault()
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full ">
        <div className="hidden sm:block bg-gray-200 rounded-sm">
          <img
            className="h-screen w-full object-cover"
            src={registerImg}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center h-full w-full bg-gray-900">
          <p className="font-bold text-3xl mb-9 text-current text-center">
            Welcome to SAL! Please Register.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 space-x-0 bg-blue-300 mx-auto p-12 rounded-2xl "
          >
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Register
            </h2>
            <div className="grid gap-8 grid-cols-2 ">
              <div className="flex flex-col text-gray-800 ">
                <label className="font-bold">First Name:</label>
                <input
                  type="text"
                  className="rounded-md p-[3px] pl-4 text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                  placeholder="Fisrt Name"
                />
              </div>
              <div className="flex flex-col text-gray-800">
                <label className="font-bold">Last Name:</label>
                <input
                  type="text"
                  className="rounded-md p-[3px] pl-4 text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:text-black focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col text-gray-800">
                <label className="font-bold">Email:</label>
                <input
                  onBlur={handleEmailBlur}
                  type="email"
                  className="rounded-md p-[3px] pl-4 w-full text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col text-gray-800">
                <label className="font-bold">Password:</label>
                <input
                  onBlur={handlePassBlur}
                  type="password"
                  className="rounded-md p-[3px] pl-4 w-full text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col text-gray-800">
                <label className="font-bold">Confirm Password:</label>
                <input
                  type="password"
                  className="rounded-md p-[3px] pl-4 w-full text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex justify-center py-2">
              <input type="checkbox" className="mr-2 mt-[1px]" />
              <p className="flex items-center text-gray-800 font-black ">
                I read and agree to
                <button  onClick={handleConditions} variant="Link">
                  <span className="text-blue-600 pl-2 underline">
                    <Link to="/TermsAndConditions">
                      Terms & Conditions.
                    </Link>
                  </span>
                </button>
              </p>
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-800 rounded-2xl p-1 text-gray-300 mb-4 w-full shadow-md shadow-blue-500/10 hover:shadow-gray-800/60 font-semibold">
                <span>Create Account</span>
              </button>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-800 font-black">
                Already have an account?
                <button onClick={handleClickForm} variant="Link">
                  <span className="text-blue-600 pl-1 underline">
                    <Link to="/Login">Sign In</Link>
                  </span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
