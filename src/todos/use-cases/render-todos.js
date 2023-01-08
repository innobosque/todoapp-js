import { Todo } from "../models/todo.model";

let elementEl = null;

/**
 * 
 * @param {Todo} obj - Un objeto Todo
 * @param {String} obj.description - Descripción 
 * @param {String} obj.id - Identificador 
 * @param {Boolean} obj.done - 
 * @returns {HTMLLIElement}
 */
const createTodo = ({description, id, done}) => {
    
    const li = document.createElement('li');
    li.dataset.id = id;
    //li.setAttribute('data-id',id);
    if(done)
        li.classList.add('completed');
    li.innerHTML = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done && 'checked'}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;
    return li;
}


/**
 * Renderizamos la lista de tipo Todo en el nodo html
 * @param {String} element donde renderizar la lista de todos
 * @param {Array<Todo>} todos 
 */
export const renderTodos = (element, todos = []) => {
    
    if(!Boolean(elementEl))
        elementEl = document.querySelector(element);
    if(!Boolean(elementEl))
        throw new Error(`Element ${element} not found.`);
    elementEl.innerHTML = '';
    todos.forEach(todo => {
        elementEl.append(createTodo(todo));
    });

}