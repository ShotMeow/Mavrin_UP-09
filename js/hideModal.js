export const hideModal = () => {
    const modal = document.querySelector('.popup-call')
    const closeButton = document.querySelector('.popup-close')
    const popup = document.querySelector('.popup')

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    popup.addEventListener('click', e => {
        if (e.target === popup)
            modal.style.display = 'none'
    })
}