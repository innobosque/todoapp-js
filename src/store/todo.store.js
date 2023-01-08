import { Todo } from '../todos/models/todo.model';
import { Filters } from './types';



const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filters.All,
}


const initStore = () => {
    throw new Error('Not implemented');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const addTodo = (todo) => {
    throw new Error('Not implemented');
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

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteAllTodo,
    setFilter,
    getCurrentFilter,
}