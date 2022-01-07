import React from 'react'
import { useForm } from '../../Hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

    const [formValues,handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name,email,password} = formValues;

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);
  }
    return (
        <form onSubmit={handleSubmit}>
           <h1>form with custom hook</h1> 
           <hr />
           <div>
               <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
               />
            </div>

            <div>
               <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
               />
            </div>

            <div>
               <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='***'
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
               />
            </div>
           
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
