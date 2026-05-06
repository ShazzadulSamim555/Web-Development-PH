import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/Firebse.init";

const Login = () => {
  const [error, setError] = useState("");

  const emailRef = useRef();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");

    // console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => setError(error));
  };
  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email= emailRef.current.value;
    console.log(emailRef.current.value)
    sendPasswordResetEmail(auth, email)
    .then((result)=> alert("Please check your email."))
    .catch(error=> console.log(error));
  };
  return (
    <div className="card-body bg-blue-50 min-h-screen flex justify-center items-center space-y-4">
      <h2 className="text-3xl font-bold">Log In Now</h2>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset bg-white p-10 rounded-lg min-w-sm shadow-lg shadow-2xl">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div onClick={handleForgetPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <p className="text-xs font-semibold text-red-700">{error.message}</p>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      {error && <p className="text-xs text-red-700">{error.message}</p>};
      <p className="text-xs font-semibold text-gray-600">
        For create a New account.{" "}
        <Link className="text-blue-600 font-bold underline" to="/register">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
