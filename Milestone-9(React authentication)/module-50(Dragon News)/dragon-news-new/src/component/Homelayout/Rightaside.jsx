import React from 'react';
import SocialLogin from './socialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const Rightaside = () => {
    return (
        <div className='flex flex-col gap-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default Rightaside;