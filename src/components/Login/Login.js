import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../Assets/loginImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from 'firebase/auth'
import app from '../../firebase.init'




const auth = getAuth(app)




const Login = () => {
  //const [error, setError]=useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handlePassBlur = (event) => {
    setPassword(event.target.value)
  }

  const handleRegister = () => {
    <Login></Login>
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log('sent Password reset mail')
    })
    //.catch((error) => {
    //setError(error.message);
  }

  const handleSubmit = (event) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user
      console.log(user)
      setEmail('')
      setPassword('')
    })
    //.catch((error) => {
    //setError(error.message);}

    event.preventDefault()
  }

  return (
    <div>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
        <div className="hidden sm:block">
          <img className="h-screen w-full object-cover" src={loginImg} alt="" />
        </div>

        <div className="flex flex-col justify-center -mt-16">
          <p className="font-medium text-lg text-gray-100 text-center my-4">
            Welcome to SAL! Login first.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 space-x-0 max-w-[400px] w-full mx-auto bg-gray-900 p-12 rounded-lg "
          >
            <h2 className="text-3xl text-gray-100 font-bold text-center">
              Login
            </h2>
            <div className="flex flex-col text-gray-100">
              <label>Email:</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                className="rounded-md p-[2px] pl-2 text-gray-800 bg-gray-500 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col text-gray-100">
              <label>Password:</label>
              <input
                onBlur={handlePassBlur}
                type="password"
                className="rounded-md p-[2px] pl-2 text-gray-800 bg-gray-500 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex justify-between py-2">
              <p className="flex items-center">
                <input type="checkbox" className="mr-2 bg-gray-500 " />
                Remember Me.
              </p>
              <button onClick={handlePasswordReset} variant="Link">
                <span className="text-sm tracking-wide text-blue-500 underline">
                  Forgot password ?
                </span>
              </button>
            </div>

            <div className="mt-12 border-t">
              <span className="block w-max mx-auto font-bold text-gray-200 -mt-3 px-4 text-center bg-gray-500">
                Or
              </span>
            </div>

            <div className=" flex justify-between">
              <button className="bg-blue-500 rounded-md p-2 text-gray-200  ">
                <FontAwesomeIcon icon="fa-brands fa-google" />
                <span>with Google</span>
              </button>
              <button className="bg-blue-500 rounded-md p-2 text-gray-200  ">
                <div>
                  <FontAwesomeIcon icon="fa-brands fa-google" />
                  <span>with Github</span>
                </div>
              </button>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-500 rounded-md p-1 text-gray-200 mb-4 w-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/60 font-semibold">
                <span>Login</span>
              </button>
            </div>

            <button className="text-blue-500 underline">
              <Link to="/Register" onClick={handleRegister}>Create new account.?</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
