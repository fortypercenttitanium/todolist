import * as DOM from './DOM.js'
import * as frame from './frame.js'
import { banner } from './header.js'

const bgimg = DOM.newElement('div', 'bgimg')

const renderItems = [bgimg, banner, frame.navBarBG, frame.displayWindow]

const render = () => {
    renderItems.forEach(item => {
        DOM.content.appendChild(item)
    })
}

export default render