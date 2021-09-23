

let inputs = Array.from(document.querySelectorAll('.email_input'));
let submitBtns = Array.from(document.querySelectorAll('.get_started_btn'));
let alerts = Array.from(document.querySelectorAll('.alert'));


submitBtns.forEach((btn,index) => {
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let currentInput = inputs[index];
        let currentAlert = alerts[index];

        if (!isValideEmail(currentInput.value)) {
            currentAlert.textContent = 'Please enter a valide email';
            currentAlert.style.color = 'red';
            currentInput.style.border = '1px solid red';
        } else {
            currentAlert.textContent = '';
            currentInput.style.border = '';
            alert('Processing...');
        }
    })
});

function isValideEmail(email){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
