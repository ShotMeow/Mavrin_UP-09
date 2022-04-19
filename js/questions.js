export const questions = () => {
    const panel = document.querySelector('#accordion-two')
    panel.addEventListener('click', e => {
        e.preventDefault()
        const content = panel.querySelectorAll('.panel-collapse')
        content.forEach(value => {
            value.style.display = 'none'
        })
        let truePanel = e.target.closest('.panel')
        truePanel.querySelector('.panel-collapse').style.display = 'block'
    })
}