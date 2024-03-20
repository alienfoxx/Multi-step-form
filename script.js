const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput= document.getElementById('phone');
const nextStep = document.getElementById('next-step1');
const myInputs= document.querySelectorAll('input');
 const inputBox= document.getElementsByClassName('input-field');
const warningMsgs = document.querySelectorAll('h5')

function checkInput() {
    myInputs.forEach(input => {
        let isEmpty =false;
        if (input.value === '') {
            input.style.borderColor = 'red';   
        } else {
            input.style.borderColor = 'hsl(206, 94%, 87%)';
        }
    });
    // its still need i ' message displaying to tell user thats the field is required' 
}

