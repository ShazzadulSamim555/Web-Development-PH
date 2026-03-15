import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <div className='flex gap-2'>
            <CircleCheckBig /><p>{feature}</p>
        </div>
    );
};

export default Features;