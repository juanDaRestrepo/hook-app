import React,{useMemo} from 'react'
import {useCounter} from '../../Hooks/useCounter';
import {useState} from 'react';
import {procesoPesado} from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {counter, increment}= useCounter(10);
    const [show,setShow] = useState(10);

    
    const memoProcesado=useMemo(() => procesoPesado(counter),[counter]);
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
        <p>{memoProcesado}</p>

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