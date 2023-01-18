import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../Assets/loginImg.png'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init'

const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value
    try {
      await signInWithEmailAndPassword(email, password)
      navigate('/UserSide')
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full ">
        <div className="flex justify-center sm:block bg-gray-200 rounded-sm">
          <img
            className="max-h-full w-100 object-cover"
            src={loginImg}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center h-full w-full bg-gray-900">
          <p className="font-bold text-3xl mb-9 text-current text-center">
            Welcome to RAP! Login first.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-4 space-x-0 bg-blue-300 mx-auto p-12 rounded-2xl "
          >
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Login
            </h2>
            <div className="flex flex-col text-gray-800">
              <label className="font-bold">Email:</label>
              <input
                type="email"
                className="rounded-md p-[2px] pl-2 text-gray-800  focus:bg-gray-200 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col text-gray-800">
              <label className="font-bold">Password:</label>
              <input
                type="password"
                className="rounded-md p-[2px] pl-2 text-gray-800  focus:bg-gray-200 focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-col text-gray-800">
              <label className="font-bold">ID:</label>
              <input
                type="number"
                className="rounded-md p-[2px] pl-2 text-gray-800  focus:bg-gray-200 focus:outline-none"
                placeholder="Submit your id"
              />
            </div>

            <div className="flex justify-between gap-4 px-2">
              <input type="checkbox" required />
              <p className="flex items-center font-bold text-gray-800">
                Remember Me.
              </p>

              <span className="text-sm tracking-wide font-black text-blue-600 underline">
                <Link to> Forgot password ?</Link>
              </span>
            </div>

            <div className="mt-12 border-t">
              <span className="block w-max mx-auto font-bold text-gray-300 -mt-3 px-4 text-center bg-gray-800">
                Or
              </span>
            </div>

            <div className=" flex justify-between">
              <button className="bg-gray-800 rounded-md w-[110px] p-2 text-gray-300  ">
                <span> Google</span>
              </button>
              <button className="bg-gray-800 rounded-md w-[110px] p-2 text-gray-300  ">
                <div>
                  <span> Github</span>
                </div>
              </button>
            </div>
            {err && (
              <span className="text-red-700 underline">
                Something went wrong
              </span>
            )}

            <div className="flex justify-center">
              <button className="bg-gray-800 rounded-md p-1 text-gray-300 mb-4 w-full shadow-lg shadow-gray-500/10 hover:shadow-gray-500/60 font-semibold">
                <span>Login</span>
              </button>
            </div>

            <p className="text-blue-600 font-black underline">
              <Link to="/Register">Create new account.?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
