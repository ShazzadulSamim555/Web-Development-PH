import React from 'react';
import UseInputField from './UseInputField';

const HookForm = () => {
    const [name, nameOnChange]=UseInputField('');
    const [email, emailOnChange]= UseInputField('');

    const handleSubmit=e =>{
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:',email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input defaultValue={name} onChange={nameOnChange} type="text" name="" id="" placeholder='Your name'/>
                <br />
                <input value={email} onChange={emailOnChange} type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;