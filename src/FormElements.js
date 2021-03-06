import * as DOM from './DOM.js'
// DOM.newElement() is a dom element generator. usage: DOM.newElement('type', 'class name (str or arr)')

class Form {
    constructor(name, label, parent, containerClass) {
        this.name = name
        this.label = label
        if(containerClass) {
            this.containerClass = containerClass
        } else {
            this.containerClass = ''
        }
        this.parent = parent
    }
}

class TextBox extends Form {
    constructor(name, label, parent, containerClass, placeholder) {
        super(name, label, parent, containerClass)
        this.placeholder = placeholder
        this.init()
    }

    init() {
        const container = DOM.newElement('div', this.containerClass)
        const newElement = DOM.newElement('input', '')
        newElement.setAttribute('type', 'text')
        newElement.className = `${this.name}-input`

        if(this.placeholder == true) {
            newElement.setAttribute('placeholder', this.label)
        } else {
            const elementLabel = DOM.newElement('label', '')
            elementLabel.setAttribute('for', this.name)
            elementLabel.textContent = this.label
            container.appendChild(elementLabel)
        }

        container.appendChild(newElement)
        this.parent.appendChild(container)
    }
}

class TextArea extends TextBox {
    constructor(...props) {
        super(...props)
    }

    init() {
        const container = DOM.newElement('div', this.containerClass)
        const newElement = DOM.newElement('textarea', '')
        newElement.className = `${this.name}-input`

        if(this.placeholder == true) {
            newElement.setAttribute('placeholder', this.label)
        } else {
            const elementLabel = DOM.newElement('label', '')
            elementLabel.setAttribute('for', this.name)
            elementLabel.textContent = this.label
            container.appendChild(elementLabel)
        }

        container.appendChild(newElement)
        this.parent.appendChild(container)
    }
}

class Dropdown extends Form {
    constructor (name, label, parent, containerClass, selected, ...options) {
        super(name, label, parent, containerClass)
        this.selected = selected
        this.options = options
        this.init()
    }

    init() {
        const container = DOM.newElement('div', this.containerClass)
        const select = DOM.newElement('select', '')
            select.setAttribute('name', this.name)
            select.className = `${this.name}-input`

        const elementLabel = DOM.newElement('label', '')
            elementLabel.setAttribute('for', this.name)
            elementLabel.textContent = this.label

        this.options.forEach(item => {
            let option = DOM.newElement('option', '')
            option.setAttribute('value', item)
            option.textContent = item
            if (item == this.selected) {
                option.setAttribute('selected', '')
            }
            select.appendChild(option)
        })
        
        container.appendChild(elementLabel)
        container.appendChild(select)
        this.parent.appendChild(container)
    }
}

class DatePicker extends Form {
    constructor(...props){
        super(...props)
        this.init()
    }

    init() {
        const container = DOM.newElement('div', this.containerClass)
        const newElement = DOM.newElement('input', '')
        newElement.setAttribute('type', 'date')
            newElement.className = `${this.name}-input`

        const elementLabel = DOM.newElement('label', '')
            elementLabel.setAttribute('for', this.name)
            elementLabel.textContent = this.label

        container.appendChild(elementLabel)
        container.appendChild(newElement)
        this.parent.appendChild(container)
    }
}


export {
    TextBox,
    TextArea,
    Dropdown,
    DatePicker
}
