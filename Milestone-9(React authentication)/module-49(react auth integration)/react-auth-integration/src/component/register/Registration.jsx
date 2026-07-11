
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";


const Registration = () => {
    const {createUser}= use(AuthContext);

    const handleRegister=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password= event.target.password.value;
   
      createUser(email, password)
      .then(result=> console.log(result))
      .catch(error=> console.log(error))
      
    }
    

    // const handleRegister = (event) => {
    //     event.preventDefault();

    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     console.log(email, password);

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error))
    // };

    return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Registration now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">
                    <label className="label">UserName</label>
                    <input 
                        type="name" 
                        name="name" 
                        className="input" 
                        placeholder="Enter Your UserName" 
                        required 
                    />
                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="input" 
                        placeholder="Email" 
                        required 
                    />
                    
                    <label className="label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input"
                      placeholder="Password"
                      required
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Register</button>
                  </fieldset>
                </form>

                <p className="text-xs">
                    Already have an account? Please{" "}
                    <Link to='/login' className="text-blue-800 font-semibold underline text-sm">
                        LogIn
                    </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Registration;