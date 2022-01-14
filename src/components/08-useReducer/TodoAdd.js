import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }
        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        handleAddTodo(newToDo);
        reset();
    }

    return (
        <>
            <h4>Add Task</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder= "Aprender ..."
                            autoComplete='off'
                            onChange={ handleInputChange }
                            value={ description }
                        />
                        <button
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>

                    </form>
        </>
    )
}
