const content = document.querySelector('.content')

const tabs = () => {
    return document.querySelectorAll('.nav')
} 

const newElement = (type, classNames) => {
    const element = document.createElement(type)
    if (Array.isArray(classNames)){
        element.classList.add(...classNames)
    } else {
        element.classList.add(classNames)
    }
    return element
}

export { newElement, content, tabs }