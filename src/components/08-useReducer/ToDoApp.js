import React,{useReducer, useEffect} from 'react'
import { toDoReducer } from './toDoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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
    
    

    useEffect( () => {
        localStorage.setItem('list',JSON.stringify(list));
    },[list])

    

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId 
        })
    }

    const handleAddTodo = ( newTodo ) =>{


        dispatch( {
            type: 'add',
            payload: newTodo
        } )

    }

    return (
        <div>
            <h1>To Do App ({list.length})</h1>
            <hr />

            
            <div className='row'>
                <div className='col-7'>

                   <TodoList 
                    todos={list} 
                    handleDelete={ handleDelete } 
                    handleToggle={ handleToggle } 
                    />

                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo = {handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
