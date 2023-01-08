import html from './app.html?raw';
import store from '../store/todo.store';

/**
 * 
 * @param {String} selector 
 */
export const App = selector => {

    const displayTodos = () => {
        const todos = store.getTodos('All')
        console.log(todos)
    }

    (()=>{
        const root = document.createElement('div');
        root.innerHTML = html;
        document.querySelector(selector).append(root);
        displayTodos();
    })()
}