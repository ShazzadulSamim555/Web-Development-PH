import React from 'react';
import './bottle.css';

const Bottle = ({bottle, handleAddCart}) => {
    console.log(bottle);
    return (
        <div className='bottle'>
            <img src={bottle.image_link} alt="" />
            <p>Id: {bottle.id}</p>
            <h3>Name: {bottle.name}</h3>
            <h4>Price: {bottle.price_usd} $</h4>
            <button onClick={()=>handleAddCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;