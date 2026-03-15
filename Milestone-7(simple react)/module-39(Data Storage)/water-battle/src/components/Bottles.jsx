import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './bottles.css'

const Bottles = ({bottlePromise}) => {
    const bottles=use(bottlePromise);
    console.log(bottles);

    const [cart, setCart]= useState([]);

    const handleAddCart=(bottle)=>{
        const newCart= [...cart,bottle];
        setCart(newCart);
    }
    return (
        <div>
            <p>water bottle: {bottles.length}</p>
            <h4>Add Cart: {cart.length}</h4>

            <div className='bottles'>
                {
                bottles.map(bottle=> <Bottle bottle={bottle} handleAddCart={handleAddCart} ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;