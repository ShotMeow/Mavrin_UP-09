import { hideModal } from "./hideModal.js"
import { showModal } from "./showModal.js"

const callButton = document.querySelector('.call-btn')

callButton.addEventListener('click', () => {
    showModal()

    const closeButton = document.querySelector('.popup-close')
    closeButton.addEventListener('click', () => {
        hideModal()
    })

    const popup = document.querySelector('.popup')
    popup.addEventListener('click', e => {
        if (e.target === popup)
            hideModal()
    })
})