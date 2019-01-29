export const UPDATE_TODO = 'UPDATE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addNewTodo(newTodo){
    return{
        type: ADD_TODO,
        payload: newTodo
    };
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}