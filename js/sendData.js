export const sendData = () => {
    const forms = document.querySelectorAll('.capture-form')
    forms.forEach(form => {
        form.addEventListener('submit', async e => {
            e.preventDefault()
            const state = form.querySelector('.state')
            try {
                state.innerHTML = 'Загрузка'
                await fetch('server.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: form.querySelector('input[name=user_name]').value,
                        phone: form.querySelector('input[name=user_phone]').value
                    })
                })
                state.innerHTML = 'Отправлено'
            }
            catch (error) {
                state.innerHTML = 'Ошибка'
            }
        })
    })
}