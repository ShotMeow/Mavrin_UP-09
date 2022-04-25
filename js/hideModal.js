export const hideModal = () => {
    const modals = document.querySelectorAll('.popup-call, .popup-check, .popup-consultation')
    const popup = document.querySelectorAll('.popup')
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.popup-close')
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'
        })

        popup.forEach(pop => {
            pop.addEventListener('click', e => {
                if (e.target === pop)
                    modal.style.display = 'none'
            })
        })
    })
}