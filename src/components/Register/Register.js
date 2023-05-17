import React, { useState } from "react";
import registerImg from "../../Assets/registerImg.png";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase.init";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleCreateUser = async (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const email = event.target[2].value;
    const password = event.target[3].value;
    const confirmPassword = event.target[4].value;
    const file = event.target[6].files[0];

    if (password !== confirmPassword) {
      <span className="text-red-700 underline">Something went wrong</span>;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${firstName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // register all data
      uploadTask.on(
        (err) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            try {
              //Update profile
              await updateProfile(res?.user, {
                displayName: firstName,
                photoURL: downloadURL,
              });
              //create user on firebase
              await setDoc(doc(db, "users", res?.user.uid), {
                uid: res?.user.uid,
                displayName: firstName,
                email: email,
                photoURL: downloadURL,
              });
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res?.user.uid), {});
              navigate("/Login");
            } catch (err) {
              setErr(true);
            }
          });
        }
      );
      navigate("/Login");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 ">
        <div className="flex justify-center rounded-sm bg-gray-200 sm:block">
          <img
            className="w-100 max-h-full object-cover"
            src={registerImg}
            alt=""
          />
        </div>

        <div className="flex h-full w-full flex-col justify-center bg-gray-900">
          <p className="mb-9 text-center text-3xl font-bold text-current">
            Welcome to SAL! Please Register.
          </p>

          <div className="mx-auto space-y-2 space-x-0 rounded-2xl bg-blue-300 p-10 ">
            <form onSubmit={handleCreateUser}>
              <h2 className="-mt-4 mb-2 text-center text-3xl font-bold text-gray-800">
                Register
              </h2>
              <div className="grid grid-cols-2 gap-8">
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
                    className="w-full rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Password:</label>
                  <input
                    type="password"
                    className="w-full rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">Confirm Password:</label>
                  <input
                    type="password"
                    className="w-full rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:outline-none"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="flex flex-col text-gray-800">
                  <label className="font-bold">ID:</label>
                  <input
                    type="number"
                    className="w-full rounded-md p-[3px] pl-4 text-gray-800  focus:bg-gray-200 focus:outline-none"
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
                    className="w-full rounded-md bg-gray-200 p-[3px] pl-4 text-gray-800 focus:bg-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center py-4">
                <input type="checkbox" className="mr-2 mt-[1px]" required />
                <p className="flex items-center font-black text-gray-800 ">
                  I read and agree to
                  <span className="pl-2 text-blue-600 underline">
                    <Link to="/TermsAndConditions">Terms & Conditions.</Link>
                  </span>
                </p>
              </div>

              {err && (
                <span className="text-red-700 underline">
                  Something went wrong
                </span>
              )}
              <div className="flex justify-center">
                <button className="mb-4 w-full rounded-2xl bg-gray-800 p-1 font-semibold text-gray-300 shadow-md shadow-blue-500/10 hover:shadow-gray-800/60">
                  <span>Create Account</span>
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <p className="font-black text-gray-800">
                Already have an account ?
                <span className="pl-2 text-blue-600 underline">
                  <Link to="/Login">Please LogIn</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
