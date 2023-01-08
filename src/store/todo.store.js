import { Todo } from '../todos/models/todo.model';
import { Filters } from './types';



const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filters.All,
}

const FILTERS_ACTIONS = {
    [Filters.All] : [...state.todos],
    [Filters.Completed] : state.todos.filter(todo => todo.done),
    [Filters.done] : state.todos.filter(todo => !todo.done),
    error: (filterValue) => { throw new Error(`Filter ${filterValue} not found`) },
}

/**
 * Filtrado de la lista de todos para mostrar
 * @param {String} filterValue - Filtro de la lista de todos: 'All','Completed', 'Pending'
 * @returns {Array<Object>} - Elementos de la lista todos
*/
const getTodos = (filterValue = Filters.All) => {
    return FILTERS_ACTIONS[filterValue] || FILTERS_ACTIONS['error'](filterValue);
}

//Alternativa con switch
// const getTodos = (filterValue = Filters.All) => {
    //     switch(filterValue){
        //         case Filters.All:
        //             return [...state.todos];
        //         case Filters.Completed:
        //             return state.todos.filter(todo => todo.done);
//         case Filters.Completed:
//             return state.todos.filter(todo => !todo.done);
//     }
//     throw new Error(`Filter ${filterValue} not found`);
// }


const addTodo = (todo) => {
    const { description } = todo;
    if(!Boolean(description))
    throw new Error('Description is empty.');
    state.todos.push(new Todo(description));
}

const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteAllTodo = () => {
    throw new Error('Not implemented');
}

const setFilter = (filterValue = Filters.All) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

/**
 * Función que inicializa el store
 */
const initStore = () => {
    //throw new Error('Not implemented');
}
const loadStore = () => {
    throw new Error('Not implemented');
}

export default {
    addTodo,
    deleteAllTodo,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}