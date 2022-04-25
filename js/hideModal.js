export const hideModal = () => {
    const modals = document.querySelectorAll('.popup-call, .popup-check, .popup-consultation')
    const closeButton = document.querySelector('.popup-close')
    const popup = document.querySelector('.popup')
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.popup-close')
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'
        })

        popup.addEventListener('click', e => {
            if (e.target === popup)
                modal.style.display = 'none'
        })
    })
}