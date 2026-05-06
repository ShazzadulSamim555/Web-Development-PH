import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../component/firebase.init';

const Login = () => {
    const googleProvider= new GoogleAuthProvider();

    const [user, setUser]= useState(null);

    const handleGoogle=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=> setUser(result.user))
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <button className='btn' onClick={handleGoogle}>Log in with Google</button>

            {
                user && <div>
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
            }
            
        </div>
    );
};

export default Login;