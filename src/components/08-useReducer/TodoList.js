import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        
        <ul 
            className='list-group list-group-flush'
            key={'list-tasks'}
        >
        {
            todos.map((todo, i) => (
                
                <TodoListItem
                    key={todo.id} 
                    task={todo} 
                    i={i} 
                    handleDelete={handleDelete} 
                    handleToggle={ handleToggle} 
                />
            )
            )
        }
        </ul>
       
    )
    
}
