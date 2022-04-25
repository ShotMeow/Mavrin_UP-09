export const constructor = () => {
    const callapses = document.querySelectorAll('#accordion .panel-collapse')
    const checkbox = document.querySelector('#myonoffswitch')
    const checkbox_2 = document.querySelector('#myonoffswitch-two')
    const resultBlock = document.querySelector('#calc-result')
    const firstDiameter = document.querySelectorAll('.form-control')[0]
    const firstCount = document.querySelectorAll('.form-control')[1]
    const secondDiameter = document.querySelectorAll('.form-control')[2]
    const secondCount = document.querySelectorAll('.form-control')[3]
    const inputPattern = /[0-9]/
    const input = document.querySelector('#collapseFour input')
    input.addEventListener('input', () => {
        if (!inputPattern.test(input.value[input.value.length - 1]))
            input.value = input.value.slice(0, -1);
    })

    let diameter_1 = 0
    let count_1 = 0

    let diameter_2 = 0
    let count_2 = 0

    let result_1 = 0
    let result_2 = 0
    let result_3 = 0
    let result

    callapses.forEach(callapse => {
        const button = callapse.querySelector('.button')
        button.addEventListener('click', e => {
            e.preventDefault()

            for (let i = 0; i < callapses.length; i++) {
                if (`#${callapses[i].id}` == button.getAttribute('href')) {
                    callapses[i].classList.add('in')
                } else {
                    if (!button.getAttribute('href'))
                        if (!input.value) {
                            input.focus()
                            return
                        } else
                            return
                    callapses[i].classList.remove('in')
                }

                if (button.getAttribute('href') == '#collapseTwo') {
                    if (checkbox.checked) {
                        result_1 = 10000
                        document.querySelectorAll('#collapseTwo .title-text')[1].style.display = 'none'
                        document.querySelectorAll('#collapseTwo .select-box')[2].style.display = 'none'
                        document.querySelectorAll('#collapseTwo .select-box')[3].style.display = 'none'
                    }
                    else
                        result_1 = 13000
                }

                if (button.getAttribute('href') == '#collapseThree') {
                    if (!checkbox.checked) {
                        if (secondDiameter.value.replace(/[^.\d]/g, '') == 1.4)
                            diameter_2 = 1500
                        else
                            diameter_2 = 2000

                        switch (secondCount.value.replace(/[^\d]/g, '')) {
                            case '1':
                                count_2 = diameter_2
                                break
                            case '2':
                                count_2 = diameter_2 * 2
                                break
                            case '3':
                                count_2 = diameter_2 * 3
                                break
                        }
                    }

                    if (firstDiameter.value.replace(/[^.\d]/g, '') == 1.4)
                        diameter_1 = 1500
                    else
                        diameter_1 = 2000

                    switch (firstCount.value.replace(/[^\d]/g, '')) {
                        case '1':
                            count_1 = diameter_1
                            break
                        case '2':
                            count_1 = diameter_1 * 2
                            break
                        case '3':
                            count_1 = diameter_1 * 3
                            break
                    }
                }
                result_2 = count_1 + count_2
            }

            if (button.getAttribute('href') == '#collapseFour') {
                if (checkbox_2.checked)
                    result_3 = 1000
            }

            result = result_1 + result_2 + result_3

            resultBlock.value = `${result} рублей`
        })
    })
}