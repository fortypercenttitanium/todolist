import * as DOM from './DOM.js'
import * as frame from './frame'
import render from './render'
import { getTodos, addTodo, removeTodo, editTodo } from './todosLibrary'

class Todo {
    
    constructor(title, description, dueDate, priority, done, created) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.done = done
        this.created = created
        addTodo(this)
    }

    removeBtn() {
        const deleteButton = DOM.newElement('div', 'delete-button')
            deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () => {
            removeTodo(this)
            render()
        })
        return deleteButton
    }

    toggleDone() {
        const doneButton = DOM.newElement('div', 'done-button')
        doneButton.textContent = 'Done'
        doneButton.addEventListener('click', () => {
            let oldIndex = getTodos().indexOf(this)
            if (this.done == true) {
                this.done = false
            } else {
                this.done = true
            }
            let edited = this
            editTodo(oldIndex, edited)
            render()
        })
        return doneButton
    }

}

export default Todo