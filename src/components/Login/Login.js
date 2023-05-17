import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../Assets/loginImg.png";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    try {
      await signInWithEmailAndPassword(email, password);
      navigate("/UserSide");
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
            src={loginImg}
            alt=""
          />
        </div>

        <div className="flex h-full w-full flex-col justify-center bg-gray-900">
          <p className="mb-9 text-center text-3xl font-bold text-current">
            Welcome to RAP! Login first.
          </p>

          <form
            onSubmit={handleLogin}
            className="mx-auto space-y-4 space-x-0 rounded-2xl bg-blue-300 p-12 "
          >
            <h2 className="text-center text-3xl font-bold text-gray-800">
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

              <span className="text-sm font-black tracking-wide text-blue-600 underline">
                <Link to> Forgot password ?</Link>
              </span>
            </div>

            <div className="mt-12 border-t">
              <span className="mx-auto -mt-3 block w-max bg-gray-800 px-4 text-center font-bold text-gray-300">
                Or
              </span>
            </div>

            <div className=" flex justify-between">
              <button className="w-[110px] rounded-md bg-gray-800 p-2 text-gray-300  ">
                <span> Google</span>
              </button>
              <button className="w-[110px] rounded-md bg-gray-800 p-2 text-gray-300  ">
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
              <button className="mb-4 w-full rounded-md bg-gray-800 p-1 font-semibold text-gray-300 shadow-lg shadow-gray-500/10 hover:shadow-gray-500/60">
                <span>Login</span>
              </button>
            </div>

            <p className="font-black text-blue-600 underline">
              <Link to="/Register">Create new account.?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
