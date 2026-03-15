import React from 'react';

const Link = ({link}) => {
    return (
        <div className='mr-4 hover:bg-blue-300 rounded-lg'>
            <p>{link.name}</p>
        </div>
    );
};

export default Link;