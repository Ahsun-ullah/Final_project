import React, { useState } from 'react'
import registerImg from '../../Assets/registerImg.png'
import { updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../../firebase.init'

const Register = () => {
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
  )

  const handleCreateUser = async (event) => {
    setLoading(true)
    event.preventDefault()
    const firstName = event.target[0].value
    const email = event.target[2].value
    const password = event.target[3].value
    const confirmPassword = event.target[4].value
    const file = event.target[6].files[0]

    if (password !== confirmPassword) {
      err(<span className="text-red-700 underline">Something went wrong</span>)
      return
    }

    navigate('/Login')

    try {
      // Create User
      const res = await createUserWithEmailAndPassword(email, password)
      console.log(res?.user.uid)
      console.log(res?.user)

      // Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${firstName + date}`)
      console.log('object')
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile

            await updateProfile(res?.user, {
              displayName: firstName,
              photoURL: downloadURL,
            })
            //create user on firebase
            console.log('object')
            await setDoc(doc(db, 'users', res?.user.uid), {
              uid: res?.user.uid,
              displayName: firstName,
              email,
              photoURL: downloadURL,
            })
            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res?.user.uid), {})
            navigate('/Login')
          } catch (err) {
            console.log(err)
            setErr(true)
            setLoading(false)
          }
        })
      })
    } catch (err) {
      setErr(true)
      setLoading(false)
    }
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

          <div className="space-y-2 space-x-0 bg-blue-300 mx-auto p-10 rounded-2xl ">
            <form onSubmit={handleCreateUser}>
              <h2 className="text-3xl font-bold text-center text-gray-800 -mt-4 mb-2">
                Register
              </h2>
              <div className="grid gap-8 grid-cols-2">
                <div className="flex flex-col text-gray-800 ">
                  <label className="font-bold">First Name:</label>
                  <input
                    type="text"
                    className="rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Last Name:</label>
                  <input
                    type="text"
                    className="rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:text-black focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Email:</label>
                  <input
                    type="email"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Password:</label>
                  <input
                    type="password"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Confirm Password:</label>
                  <input
                    type="password"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">ID:</label>
                  <input
                    type="number"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Submit your id"
                  />
                </div>
                <div className=" flex-row text-gray-800">
                  <label htmlFor="file" className="font-bold">
                    <span>Add a picture</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="rounded-md p-[3px] pl-4 w-full text-gray-800 focus:bg-gray-400 bg-gray-200"
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
              {loading && <span className="text-gray-900 underline"></span>}
              {err && (
                <span className="text-red-700 underline">
                  Something went wrong
                </span>
              )}
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
                  <Link to="/Login">Please LogIn</Link>
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
