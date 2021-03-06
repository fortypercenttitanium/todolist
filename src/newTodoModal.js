import * as DOM from './DOM.js'
import { TextBox, TextArea, Dropdown, DatePicker } from './FormElements'
import Todo from './todos'
import render from './render'
import * as frame from './frame'

const modal = DOM.newElement('div', 'modal')

const title = new TextBox('title', 'Title', modal, 'modal-title', true)
const description = new TextArea('description', 'Description', modal, 'modal-description', true)
const dueDate = new DatePicker('duedate', 'Due:', modal, 'modal-due-date')
const priority = new Dropdown('priority', 'Priority:', modal, 'modal-priority', 'Medium', 'High', 'Medium', 'Low')

const submit = DOM.newElement('div', 'submit')
submit.textContent = 'Add To List'
modal.appendChild(submit)

const openModal = () => {
  modal.style.display = 'block'
  frame.newTodo.textContent = 'Close'
}

const closeModal = () => {
  modal.style.display = 'none'
  frame.newTodo.textContent = 'New Todo Item'
}

const submitHandler = () => {
  let today = new Date()
  const todo = new Todo(DOM.title().value, DOM.description().value, DOM.dueDate().value, DOM.priority().value, false, today)
  render()
  DOM.clearVals()
  closeModal()
}

submit.addEventListener('click', submitHandler)

export 
  { modal as default,
    openModal,
    closeModal
  }