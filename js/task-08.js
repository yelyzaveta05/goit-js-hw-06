const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget

        if (email.value === '') {
            alert("Сначала введите Email!");
            return true;
        };
        if (password.value === '') {
            alert("Сначала введите Password!");
            return true;
        };

    const formDataValue = { email: email.value, password: password.value };

    event.currentTarget.reset();

    console.log(formDataValue);
};