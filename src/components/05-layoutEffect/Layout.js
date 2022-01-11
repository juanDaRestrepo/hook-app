import React,{useRef,useLayoutEffect,useState} from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './layout.css';
export const Layout = () => {

    const {counter,increment,decrement} = useCounter(1);
    
   const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect())
    },[quote]);
   return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            
            <blockquote className='blockquote text-end'>
                <p ref={pTag} className='mb-1'>{quote}</p>
                
            </blockquote>
              
            
            <pre>
                {JSON.stringify(boxSize)}
            </pre>

            <button className='btn btn-primary ' onClick={decrement}>
                Anterior quote
            </button>

            <button className='btn btn-primary ms-2' onClick={increment}>
                Siguiente quote
            </button>

            
            
        </div>
    )
}