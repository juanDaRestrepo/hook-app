import React,{useReducer} from 'react'
import './styles.css';
import { toDoReducer } from './toDoReducer';

export const ToDoApp = () => {
    
    const initialState = [{
        id: new Date().getTime(),
        desc: 'Lavar Ropa',
        done: false
    }]
    const [list] = useReducer(toDoReducer, initialState)
    
    return (
        <div>
            <h1>To Do App ({list.length})</h1>
            <hr />

            
            <div className='row'>
                <div className='col-7'>

                    <ul className='list-group list-group-flush'>
                        { list.map((task, i) => (
                        <li 
                            key={list.id}
                            className='list-group-item'
                            >
                                <p className='text-center'>{i+1}.{task.desc} </p>
                                <button className='btn btn-danger'>Borrar</button>
                        </li>
                        ))}
                    </ul>

                </div>
                <div className='col-5'>
                    <h4>Add Task</h4>
                    <hr />

                    <form>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder= "Aprender ..."
                            autoComplete='off'
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
