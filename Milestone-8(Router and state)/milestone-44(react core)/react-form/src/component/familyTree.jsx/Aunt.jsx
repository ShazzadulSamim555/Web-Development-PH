import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Labib'></Cousin>
                <Cousin name="Himel"></Cousin>
                <Cousin name="Daisy"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;