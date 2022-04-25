export const constructor = () => {
    const callapses = document.querySelectorAll('#accordion .panel-collapse')
    const checkbox = document.querySelector('#myonoffswitch')
    const resultBlock = document.querySelector('#calc-result')
    const firstDiameter = document.querySelectorAll('.form-control')[0]
    const firstCount = document.querySelectorAll('.form-control')[1]
    const secondDiameter = document.querySelectorAll('.form-control')[2]
    const secondCount = document.querySelectorAll('.form-control')[3]
    const titleTexts = document.querySelectorAll('.title-text')
    const selectBoxes = document.querySelectorAll('.select-box')

    let result = 0
    callapses.forEach(callapse => {
        const button = callapse.querySelector('.button')
        button.addEventListener('click', e => {
            e.preventDefault()
            for (let i = 0; i < callapses.length; i++) {
                if (`#${callapses[i].id}` == button.getAttribute('href')) {
                    callapses[i].classList.add('in')
                } else {
                    callapses[i].classList.remove('in')
                }
            }

            if (checkbox.checked) {
                result = 10000
                titleTexts[1].style.display = 'none'
                selectBoxes[2].style.display = 'none'
                selectBoxes[1].style.display = 'none'
            } else {
                result = 13000
            }
            resultBlock.value = result
        })
    })
}