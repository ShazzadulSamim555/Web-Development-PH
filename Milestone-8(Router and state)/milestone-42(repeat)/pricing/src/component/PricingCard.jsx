import React from 'react';
import Features from './Features';

const PricingCard = ({pricing}) => {
    const {id, name, price, features}=pricing
    return (
        <div className='bg-cyan-400 md:p-5 p-2 rounded-lg space-y-4 flex flex-col'>
            <h3 className='text-5xl'>{name}</h3>
            <p className='text-4xl text-gray-600'>${price}/Month</p>

            <div className='bg-olive-600 rounded-lg p-4 text-white space-y-2 flex-1 mt-9'>
                {
                    features.map((feature, index)=> <Features key={index} feature={feature}></Features>)
                }
            </div>

            <button className='btn btn-dash btn-primary w-full'>Subscribe</button>
            
        </div>
    );
};

export default PricingCard;