const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const mail = formEl.email.value;
    const password = formEl.password.value;
    const formData = { mail, password };

    function validForm() {
        if (mail === '') {
            alert("Сначала введите Email!");
            return true;
        };
        if (password === '') {
            alert("Сначала введите Password!");
            return true;
        };
        return false;
    };
    validForm();

    event.currentTarget.reset();

    console.log(formData);
};