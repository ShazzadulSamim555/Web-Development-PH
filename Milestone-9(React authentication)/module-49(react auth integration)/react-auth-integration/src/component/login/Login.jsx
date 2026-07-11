import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  // const authInfo= use(AuthContext);
  // console.log(authInfo);
 
  const {signInUser}= use(AuthContext);
  
  const handleSignIn=(event)=>{
    event.preventDefault();

    const email= event.target.email.value;
    const password= event.target.password.value;

    console.log(email, password);
    
    signInUser(email, password)
    .then(result => console.log(result))
    .catch(error=> console.log(error))

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please LogIn now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  name='password'
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            <p className="text-xs">
              Are you new this account? Please{" "}
              <Link
                to="/registration"
                className="text-blue-800 font-semibold underline text-sm"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
