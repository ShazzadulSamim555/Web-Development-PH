import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebse.config";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const handleSign = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  // console.log(user.displayName);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Please sign in</h3>
      {/* <button onClick={handleSign}>Sign in with google</button>
      <button onClick={handleSignOut}>Sign out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleSign}>Sign in with google</button>
      )}

      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
