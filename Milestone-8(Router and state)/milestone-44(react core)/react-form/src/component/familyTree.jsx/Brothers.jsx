import React, { useContext } from 'react';
import { MoneyContext } from './Family';

const Brothers = () => {
    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h3>Brothers</h3>

            <button onClick={()=>setMoney(money+1000)}>Add 1000tk for Balance</button>
        </div>
    );
};

export default Brothers;