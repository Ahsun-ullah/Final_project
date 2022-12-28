import React, { useState } from 'react'
import registerImg from '../../Assets/registerImg.png'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [
    createUserWithEmailAndPassword,
    user,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const navigate = useNavigate()

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handlePassBlur = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPassBlur = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleCreateUser = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      error('Password did not match')
      return
    }
    createUserWithEmailAndPassword(email, password)

    if (user) {
      console.log('user:', user)
    }

    navigate('/Login')
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full ">
        <div className="flex justify-center sm:block bg-gray-200 rounded-sm">
          <img
            className="max-h-full w-100 object-cover"
            src={registerImg}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center h-full w-full bg-gray-900">
          <p className="font-bold text-3xl mb-9 text-current text-center">
            Welcome to SAL! Please Register.
          </p>

          <div className="space-y-4 space-x-0 bg-blue-300 mx-auto p-12 rounded-2xl ">
            <form onSubmit={handleCreateUser}>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Register
              </h2>
              <div className="grid gap-8 grid-cols-2 ">
                <div className="flex flex-col text-gray-800 ">
                  <label className="font-bold">First Name:</label>
                  <input
                    type="text"
                    className="rounded-md p-[3px] pl-4 text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Last Name:</label>
                  <input
                    type="text"
                    className="rounded-md p-[3px] pl-4 text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:text-black focus:outline-none"
                    placeholder="Last Name"
                    required
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
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Password:</label>
                  <input
                    onBlur={handlePassBlur}
                    type="password"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Confirm Password:</label>
                  <input
                    onBlur={handleConfirmPassBlur}
                    type="password"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800 bg-gray-800 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center py-4">
                <input type="checkbox" className="mr-2 mt-[1px]" required />
                <p className="flex items-center text-gray-800 font-black ">
                  I read and agree to
                  <span className="text-blue-600 pl-2 underline">
                    <Link to="/TermsAndConditions">Terms & Conditions.</Link>
                  </span>
                </p>
              </div>
              <p className="text-red-700 underline">{error}</p>
              <div className="flex justify-center">
                <button className="bg-gray-800 rounded-2xl p-1 text-gray-300 mb-4 w-full shadow-md shadow-blue-500/10 hover:shadow-gray-800/60 font-semibold">
                  <span>Create Account</span>
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <p className="text-gray-800 font-black">
                Already have an account ?
                <span className="text-blue-600 pl-2 underline">
                  <Link to="/Login">Sign In</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
