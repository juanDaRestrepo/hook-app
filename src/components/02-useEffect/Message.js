import React,{useEffect,useState} from 'react'

export const Message = () => {
    const [mouseState, mouseChangeState] =useState({
        clientX:0,
        clientY:0
    })

    const {clientX,clientY} = mouseState;
    useEffect(() => {

        const mouseMove = (e) =>{
            mouseChangeState({
                clientX:e.x,
                clientY:e.y
            })
        }
        window.addEventListener('mouseover', mouseMove)
        return () => {
            console.log('el componente se desmonto')
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <>
           <h2>Message</h2> 
           <p>x:{clientX} y:{clientY}</p>
           <p></p>
        </>
    )
}
