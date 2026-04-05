import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {

    const [error, setError]= useState('');

    const handleProductSubmit= event=>{
        event.preventDefault();
        // console.log(event.target)
        const name=event.target.name.value;
        const price=event.target.price.value;
        const quantity=event.target.quantity.value;

        if(name.length===0){
            setError('Please add Product name.');
            return;
        }
        else if(price <0){
            setError('Price can not be Negative.');
            return;
        }
        else if(price==0){
            setError('Please add valid price.');
            return;
        }
        else if(quantity <0){
            setError('Quantity can not be Negative.');
            return;
        }
        else if(quantity==0){
            setError('Please add valid Quantity.');
            return;
        }
        else{
            setError('');
        }
        

        // console.log(name, price, quantity);

        const newProduct={
            name, 
            price,
            quantity
        }
        // console.log(newProduct);
        handleProduct(newProduct);

    }
    return (
        <div>
            <form onSubmit={handleProductSubmit} action="">
                <input type="text" name="name" id="" placeholder='Product Name'/>
                <br />
                <input type="text" name="price" id="" placeholder='Product Price'/>
                <br />
                <input type="text" name="quantity" id="" placeholder='Product Quantity'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;