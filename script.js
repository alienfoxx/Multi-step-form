const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput= document.getElementById('phone');
const nextStep = document.getElementById('next-step1');
const myInputs= document.querySelectorAll('input');
 const inputBox= document.getElementsByClassName('input-field');
const warningMsgs = document.querySelectorAll('h5')



// requireNot.style.cssText= 'color: red; font-weight:700';



function checkInput() {

    myInputs.forEach(input => {
        let isEmpty =false;
        if (input.value === '') {
            input.style.borderColor = 'red';
            isEmpty =true;
            warningMsgs.forEach(warningmsg => {
                if(myInputs = ''){
                    
                }
            })
            
        } else {
            input.style.borderColor = 'hsl(206, 94%, 87%)';
        }
       
    });

    function displayingNsg(){
       
    }
    

    // its still need i ' message displaying to tell user thats the field is required'
    
}
function checkValidation(){

}

