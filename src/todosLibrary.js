import { parseISO } from 'date-fns'
import Todo from './todos'

//check if localstorage is available
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
        }
}

const todosLibrary = []

const updateStorage = () => {         //called whenever a change is made to library
    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoList', JSON.stringify(todosLibrary))
    }
}

const getTodos = () => {
    return todosLibrary;
}

const addTodo = (todo) => {
    todosLibrary.push(todo)
}

const removeTodo = (todo) => {
    todosLibrary.splice(todosLibrary.indexOf(todo), 1)
}

const editTodo = (index, newTodo) => {
    todosLibrary[index] = newTodo
    updateStorage()
}

if (storageAvailable('localStorage')) {
    if (window.localStorage.hasOwnProperty('todoList') && window.localStorage.todoList != '{}') {
        console.log('Storage available and todo list exists. Populating todolist.')
        const tempList = Array.from(JSON.parse(localStorage.todoList));
        tempList.forEach(item => {
            const newTodo = new Todo(item['title'], item['description'], item['dueDate'], item['priority'], item['done'], parseISO(item['created']))
        })

    } else {
        console.log('Storage available, but no existing library. Creating empty library in storage.')
        localStorage.setItem('todoList', '{}');
    }
} else {
    console.log('Local storage not available.')
}

export {
    getTodos,
    addTodo,
    removeTodo,
    editTodo,
    updateStorage
}