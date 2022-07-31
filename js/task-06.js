const inputEl = document.querySelector("#validation-input");
const inputDataLengthEl = inputEl.getAttribute('data-length');
const inputDataNumberEl = parseInt(inputDataLengthEl);

inputEl.addEventListener('blur', function () {
    if (inputDataNumberEl !== this.value.length) {
    inputEl.classList.add('invalid');
        return;
    }
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
});