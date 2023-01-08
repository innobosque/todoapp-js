import { Todo } from '../todos/models/todo.model';
import { Filters } from '../types';



const state = {
    todos: [
        new Todo('Gema del alma'), //Gamora y Natalia Romanoff
        new Todo('Gema del espacio'),
        new Todo('Gema de la mente'),
        new Todo('Gema de la realidad'),
        new Todo('Gema del tiempo'),
        new Todo('Gema del poder'),
    ],
    filter: Filters.All,
}

const FILTERS_ACTIONS = {
    [Filters.All]: () => [...state.todos],
    [Filters.Completed]: () => state.todos.filter(todo => todo.done),
    [Filters.done]: () => state.todos.filter(todo => !todo.done),
    error: (filterValue) => { throw new Error(`Filter ${filterValue} not found`) },
}

/**
 * Filtrado de la lista de todos para mostrar
 * @param {String} filterValue - Filtro de la lista de todos: 'All','Completed', 'Pending'
 * @returns {Array<Object>} - Elementos de la lista todos
*/
const getTodos = (filterValue = Filters.All) => {
    return FILTERS_ACTIONS[filterValue]() || FILTERS_ACTIONS['error'](filterValue);
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
    if (!Boolean(description))
        throw new Error('Description is empty.');
    //state.todos.push(new Todo(description));
    state.todos = [...state.todos, new Todo(description)];
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    if(!Boolean(todoId))
        throw new Error(`Identifier ${todoId} not exist`);
    state.todos = state.todos.map(
        todo => todo.id === todoId ? ({...todo, done:!todo.done}) : {...todo}
    );
}

/**
 * Función para eliminar un todo de la lista    
 * @param {String} todoId - Identificador del todo a eliminar
 */
const deleteTodo = (todoId) => {
    if (!Boolean(todoId))
        throw new Error(`Identifier ${todoId} not exist`);
    state.todos = state.todos.filter(todo => todo.id !== todoId)
}

/**
 * Eliminar todos los todos que su estado ya estén completados
 */
const deleteAllCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
}

/**
 * El nuevo filtro para ver la lista
 * @param {Filters} filterValue - Filtros aceptados
 */
const setFilter = (filterValue = Filters.All) => {
    if(!Object.keys(Filters).includes(filterValue))
        throw new Error(`Filter ${filterValue} not exist`);
    state.filter = filterValue;
}

const getCurrentFilter = () => {
   return state.filter;
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
    deleteAllCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}