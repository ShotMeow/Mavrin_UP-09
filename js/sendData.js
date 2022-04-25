export const sendData = () => {
    const forms = document.querySelectorAll('.capture-form')
    forms.forEach(form => {
        form.addEventListener('submit', async e => {
            let message = document.querySelector('input[name=user_quest]')
            e.preventDefault()
            const state = form.querySelector('.state')
            try {
                state.innerHTML = 'Загрузка'
                if (message.value) {
                    await fetch('server.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: form.querySelector('input[name=user_name]').value,
                            phone: form.querySelector('input[name=user_phone]').value,
                            message: message
                        })
                    })
                    message.value = ''
                } else {
                    await fetch('server.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: form.querySelector('input[name=user_name]').value,
                            phone: form.querySelector('input[name=user_phone]').value
                        })
                    })
                }
                state.innerHTML = 'Отправлено'
                const inputs = document.querySelectorAll('input')
                inputs.forEach(input => {
                    input.value = ''
                })
            }
            catch (error) {
                state.innerHTML = 'Ошибка'
            }
        })
    })
}