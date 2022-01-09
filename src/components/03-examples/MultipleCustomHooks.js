import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';
export const MultipleCustomHooks = () => {

    const {counter,increment,decrement} = useCounter(1);
    
   const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {author,quote} = !!data && data[0];
   
   return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading?
                (
                    <div className='alert alert-info text-center'>
                        loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-end'>
                    <p className='mb-1'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
            }
            
            <button className='btn btn-primary' onClick={increment}>
                Siguiente quote
            </button>

            <button className='btn btn-primary ms-2' onClick={decrement}>
                Anterior quote
            </button>
            
        </div>
    )
}
