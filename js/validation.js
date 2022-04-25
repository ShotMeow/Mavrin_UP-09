export const validation = () => {
    const phoneInputs = document.querySelectorAll('.phone-user');
    const nameInputs = document.querySelectorAll('input[name="user_name"]');
    const numbersPattern = /^[1-9]+[0-9]*$/;
    const namePattern = /^[а-яё -]+$/i;

    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener('input', () => {
            if (!numbersPattern.test(phoneInput.value[phoneInput.value.length - 1]))
                phoneInput.value = phoneInput.value.slice(0, -1);
        })
    })

    nameInputs.forEach(nameInput => {
        nameInput.addEventListener('input', () => {
            if (!namePattern.test(nameInput.value[nameInput.value.length - 1]))
                nameInput.value = nameInput.value.slice(0, -1);
        })
    })
}