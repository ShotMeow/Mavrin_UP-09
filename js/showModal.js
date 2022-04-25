export const showModal = () => {
    const callButtons = document.querySelectorAll('.call-btn, .discount-btn')
    callButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector('.popup-call')
            modal.style.display = 'block'
        })
    })

    document.querySelector('.gauging-button').addEventListener('click', () => {
        document.querySelector('.popup-check').style.display = 'block'
    })
}