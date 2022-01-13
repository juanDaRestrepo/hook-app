import React,{useReducer, useEffect} from 'react'
import { toDoReducer } from './toDoReducer';
import {useForm} from '../../Hooks/useForm';

import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('list')) || [];
    /* return[{
        id: new Date().getTime(),
        desc: 'Lavar Ropa',
        done: false
    }] */
}

export const ToDoApp = () => {
    
    
    const [list, dispatch] = useReducer(toDoReducer, [], init)
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    useEffect( () => {
        localStorage.setItem('list',JSON.stringify(list));
    },[list])

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

        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch(action);
        reset();
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>To Do App ({list.length})</h1>
            <hr />

            
            <div className='row'>
                <div className='col-7'>

                    <ul className='list-group list-group-flush'
                        key={'list-tasks'}
                    >
                        { list.map((task, i) => (
                        <li 
                            key={task.id}
                            className='list-group-item'
                            >
                                <p className='text-center'>{i+1}.{task.desc} </p>
                                <button className='btn btn-danger' onClick={()=>handleDelete(task.id)}>Borrar</button>
                        </li>
                        ))}
                    </ul>

                </div>
                <div className='col-5'>
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
                </div>
            </div>
        </div>
    )
}
