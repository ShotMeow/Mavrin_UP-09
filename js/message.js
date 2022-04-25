export const message = () => {
    const form = document.querySelector('.director-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const popup = document.querySelector('.popup-consultation')
        popup.style.display = 'block'
    })
}