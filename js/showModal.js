export const showModal = () => {
    const callButtons = document.querySelectorAll('.call-btn')
    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector('.popup-call')
            modal.style.display = 'block'
        })
    })
}