import * as DOM from './DOM.js'
import { getTodos } from './todosLibrary'
import modal, {openModal, closeModal} from './newTodoModal'
import { formatRelative } from 'date-fns'

const title = DOM.newElement('header', 'title')
const newTodo = DOM.newElement('div', 'new-todo')
const todosContainer = DOM.newElement('div', 'container')

title.textContent = 'Todo List'
newTodo.textContent = 'New Todo Item'

const newTodoHandler = () => {
    if (modal.style.display == 'block') {
      closeModal()
    } else {
      openModal()
    }
  }

newTodo.addEventListener('click', newTodoHandler)

const renderTodos = () => {

    todosContainer.textContent = ''    //clear the container

    let today = new Date()

    getTodos().forEach(todo => {        //get all todos in library and put them in containers
        let container = DOM.newElement('div', 'todo-container')
        let title = DOM.newElement('h1', 'todo-title')
            title.textContent = todo.title
        let desc = DOM.newElement('p', 'todo-desc')
            desc.textContent = todo.description
        let due = DOM.newElement('h3', 'todo-due')
            due.textContent = `Due: ${todo.dueDate}`
        let priority = DOM.newElement('h3', 'todo-priority')
            priority.textContent = `Priority: ${todo.priority}`
        let created = DOM.newElement('p', 'todo-created')
            created.textContent = `Created: ${formatRelative(todo.created, today)}`
        let delBtn = todo.removeBtn()
        let doneBtn = todo.toggleDone()
        
        let appends = [title, desc, due, priority, created, doneBtn , delBtn]
        
        appends.forEach(item => {
            container.appendChild(item)
        })

        if (todo.done) {
            container.childNodes.forEach(child => {
                if((!child.classList.contains('done-button')) && (!child.classList.contains('delete-button'))) {
                    child.style.textDecoration = 'line-through'
                    child.style.color = 'grey'
                }
            })
        }

        todosContainer.appendChild(container)        //render them all
    })
}

export {
    title,
    newTodo,
    todosContainer,
    renderTodos
}