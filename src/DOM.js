// create a new element function
const newElement = (type, classNames) => {
    const element = document.createElement(type)
    if (Array.isArray(classNames)){
        element.classList.add(...classNames)
    } else if(classNames) {
        element.classList.add(classNames)
    }
    return element
}


// queries
const content = document.querySelector('.content')
const newTodoButton = document.querySelector('.new-todo')
const title = () => document.querySelector('.title-input')
const description = () => document.querySelector('.description-input')
const dueDate = () => document.querySelector('.duedate-input')
const priority = () => document.querySelector('.priority-input')
const modalSubmit = document.querySelector('.submit')

const clearVals = () => {
    const clearItems = [
        document.querySelector('.title-input'),
        document.querySelector('.description-input'),
        document.querySelector('.duedate-input')
    ]
    clearItems.forEach(item => {
        item.value = ''
    })
}

export { 
    newElement, 
    content,
    title,
    description,
    dueDate,
    priority,
    modalSubmit,
    newTodoButton,
    clearVals
}