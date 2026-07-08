import React from 'react';
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='mb-3 text-xl font-bold'>Login With</h1>

            <div className='flex flex-col gap-2 my-2'>
                <button className='btn btn-soft btn-secondary'><FcGoogle /> Login with Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;