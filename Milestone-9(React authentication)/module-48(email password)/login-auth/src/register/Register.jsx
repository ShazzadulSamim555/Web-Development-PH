import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/Firebse.init";
import { FaEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const form = event.target;
    const terms= event.target.terms.checked;

    if(!terms){
      setError("Please accept our all terms and condition.");
      return;
    }

    // console.log("Email: ", email);
    // console.log("Password: ", password);

    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        sendEmailVerification(result.user)
        .then(()=> {
          alert("Please login to your email & verified.")
        })

        if(!result.user.emailVerified){
          alert('Please verified your Email address.')
        }
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password (at most 6 character)"
                    name="password"
                  />
                  <button
                    onClick={handleShow}
                    className="absolute btn btn-xs top-2 right-5"
                  >
                    {showPassword ? <BiSolidHide /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <label className="label">
                    <input
                      name='terms'
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                    Accept our all term & conditions.
                  </label>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {success && (
                <p className="text-green-700 text-sm font-semibold">
                  Account created Successfully.
                </p>
              )}

              <p className="text-xs text-gray-700 font-semibold text-center">Already have an account? <Link to='/login' className="text-sm font-semibold text-blue-700 underline">LogIn</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
