import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
           <header className='w-11/12 mx-auto pt-4'>
             <Navbar></Navbar>
           </header>

           <main>
            <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;