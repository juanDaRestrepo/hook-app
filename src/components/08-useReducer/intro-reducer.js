const initialState =[{
    id:1,
    todo:'Comprar desayuno',
    done:false
}];

const toDoReducer = (state = initialState, action) =>{
    
    if(action?.type === 'agregar'){
        return[...state,action.payload];
    }

    return state;
}

let todos = toDoReducer();

const newToDo = {
    id:2,
    todo:'comprar leche',
    done:false
}

const action = {
    type:'agregar',
    payload:newToDo
}

todos = toDoReducer(todos, action);

console.log(todos)