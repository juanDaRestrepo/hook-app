import React,{useState,useCallback} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    /* const increment = () => {
        setCounter(counter +1);
    } */
   const increment= useCallback(
        (num) => {
            setCounter(counter=>counter + num);
        },
        [setCounter],
    )

    return (
        <div>
            <h1>CallbackHook: {counter}</h1>
            <hr />

            <ShowIncrement increment ={increment} />
        </div>
    )
}
