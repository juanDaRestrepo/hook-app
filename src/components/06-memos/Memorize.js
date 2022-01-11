import React from 'react'

import {useCounter} from '../../Hooks/useCounter';
import { Small } from './Small';
import {useState} from 'react';
export const Memorize = () => {
    const {counter, increment}= useCounter(10);
    const [show,setShow] = useState(10);;
    return (
        <div>
            <h2>Counter: <Small value={counter}/></h2>
            <hr />
        <button 
            className='btn btn-primary'
            onClick={increment}
        >
          +1  
        </button>

        <button
            className='btn btn-outline-primary ml-3'
            onClick={()=>{
                setShow(!show);
            }}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
        </div>
    )
}
