const buttonGenerate = document.querySelector('.generate');
const buttonCopy = document.querySelector('.copy');
let inputPassword = document.querySelector('#input-password');

    function generatePassword() {
        let randomPassword = Math.random().toString(36).slice(-8);

        inputPassword.value = randomPassword;  
    }

    function copyPassword() {
        inputPassword.select();
        document.execCommand('copy');
        alert('Password copied successfully !');
    }

buttonGenerate.addEventListener('click', generatePassword);
buttonCopy.addEventListener('click', copyPassword);