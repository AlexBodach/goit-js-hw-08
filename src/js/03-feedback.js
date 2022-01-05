import throttle from 'lodash.throttle';

const refs = {
    textAreaForm: document.querySelector('.feedback-form'),
    textEmail: document.querySelector('.email'),
    textMessage: document.querySelector('.message')   
};

refs.textAreaForm.addEventListener('input', throttle(inputSaved, 1000));
refs.textAreaForm.addEventListener('submit', formSubmit);

populateTextArea ();
const textInForm = {
   email:'',
   message:''
};   

function inputSaved (evt) { 
    if (evt.target.name === 'email') {
        textInForm.email = evt.target.value;
    } 
    
    if (evt.target.name === 'message'){
        textInForm.message = evt.target.value;
    }
   localStorage.setItem('feedback-form-state', 
   JSON.stringify(textInForm))
}

function formSubmit (evt) {
   evt.preventDefault();
   console.log(textInForm)
   evt.target.reset();
   localStorage.removeItem('feedback-form-state') 
}

function populateTextArea () {
    const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
        if(savedMessage) {
            refs.textEmail.value = savedMessage.email;
            refs.textMessage.value = savedMessage.message;
    }
}  