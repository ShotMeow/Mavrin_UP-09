export const showModal = () => {
    const callButton = document.querySelector('.call-btn')
    callButton.addEventListener('click', () => {
        const modal = document.querySelector('.popup-call')
        modal.style.display = 'block'
    })
}