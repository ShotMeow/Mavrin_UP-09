export const more = () => {
    const sentence = document.querySelector('.sentence')
    const blocks = sentence.querySelectorAll('.col-xs-12')
    const button = sentence.querySelector('.add-sentence-btn')
    button.addEventListener('click', () => {
        button.style.display = 'none'
        blocks.forEach(block => {
            if (block.classList.contains('hidden'))
                block.classList.remove('hidden')
        })
    })
}