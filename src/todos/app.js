import html from './app.html?raw';

/**
 * 
 * @param {String} selector 
 */
export const App = selector => {
    (()=>{
        const root = document.createElement('div');
        root.innerHTML = html;
        document.querySelector(selector).append(root);
    })()
}