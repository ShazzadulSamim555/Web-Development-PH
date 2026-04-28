import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex gap-3'>
            <NavLink className={({isActive})=> isActive? "px-2 border-b-2 border-blue-700 text-blue-500 font-semibold rounded-lg text-sm":""} to='/' >Home</NavLink>
            <NavLink className={({isActive})=> isActive? "px-2 border-b-2 border-blue-700 text-blue-500 font-semibold rounded-lg text-sm":""} to='login'>LogIn</NavLink>
        </div>
    );
};

export default Header;