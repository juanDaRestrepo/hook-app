import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';
export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset}=useCounter(100);

    return (
        <>
            <h1>Counter with hook:{state}</h1>
            <hr />
            <button className='btn btn-primary ml-1' onClick={() => {increment(2)}}>+1</button>
            <button className='btn btn-danger ml-1' onClick={reset}>reset</button>
            <button className='btn btn-primary ml-1' onClick={() => {decrement(2)}}>-1</button>
        </>
    )
}
