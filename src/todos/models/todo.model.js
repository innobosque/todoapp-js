import { v4 as uuid4 } from 'uuid';
export class Todo {
    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = uuid4();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}