import React from 'react';
import MySelf from './MySelf';
import Brothers from './Brothers';
import Sisters from './Sisters';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>

            <section className='flex'>
                <MySelf asset={asset}></MySelf>
                <Brothers></Brothers>
                <Sisters></Sisters>
            </section>
        </div>
    );
};

export default Dad;