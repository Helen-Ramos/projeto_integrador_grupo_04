const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click' , toggleMenu);


const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});

//  validar campo  //
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    span[index].style.display = 'none';
}

function emailValidate() {
    if (!emailRegex.test(campos[0].value)) {
        setError(0);
    } else {
        removeError(0);
    }
}

function mainPasswordValidate() {
    if (campos[1].value.length < 8) {
        setError(1);
    } else {
        removeError(1);
        comparePassword();
    }
}

function comparePassword() {
    if (campos[1].value === campos[2].value && campos[2].value.length >= 8) {
        removeError(2);
    } else {
        setError(2);
    }
}
