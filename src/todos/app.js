import html from './app.html?raw';
import store from '../store/todo.store';
import { renderTodos } from './use-cases';
import { HtmlElements } from '../types';

/**
 * 
 * @param {String} selector 
 */
export const App = selector => {

    const displayTodos = () => {
        const todos = store.getTodos(store.getCurrentFilter());
        //console.log(todos)
        renderTodos(HtmlElements.Todos,todos);
    }

    (()=>{
        const root = document.createElement('div');
        root.innerHTML = html;
        document.querySelector(selector).append(root);
        displayTodos();
    })()

    //Referencias HTML
    const newDescriptionInput = document.querySelector(HtmlElements.NewTodo);
    const todoListUL = document.querySelector(HtmlElements.Todos);

    //Listeners
    newDescriptionInput.addEventListener('keyup', event =>{
        if(event.keyCode!==13) return; //Si no pulsamos 'Enter'===13

        const {value} = event.target;
        if(!Boolean(value.trim().length)) return;

        store.addTodo({description: value.trim()});
        displayTodos();

        //Limpiamos
        event.target.value = '';
    });

    todoListUL.addEventListener('click', event => {
        //Busco el elemento padre más cercano
        const element = event.target.closest('[data-id]');
        //element.getAttribute('data-id')
        store.toggleTodo(element.dataset.id);
        displayTodos();
    });



}