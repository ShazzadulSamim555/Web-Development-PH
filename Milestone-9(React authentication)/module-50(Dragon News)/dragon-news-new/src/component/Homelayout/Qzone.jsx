import React from 'react';
import classromm from "../../assets/class.png";
import swim from  "../../assets/swimming.png";
import playground from "../../assets/playground.png"


const Qzone = () => {
    return (
        <div className='bg-base-200  p-3 rounded-lg'>
            <h1 className='mb-3 text-xl font-bold'>Q-Zone</h1>
            <div className='flex flex-col justify-center gap-4'>
                <img src={classromm} alt="" />
                <img src={swim} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;