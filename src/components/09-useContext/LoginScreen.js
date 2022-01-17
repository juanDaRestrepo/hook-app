import React,{useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser} = useContext(UserContext);
    const us = {
        id:234,
        name: 'Juan Daniel'
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setUser(us)}>
                Login
            </button>
        </div>
    )
}
