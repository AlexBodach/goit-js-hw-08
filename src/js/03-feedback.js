import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const textInForm = {
    email:'',
    message:''
 };   

const refs = {
    textAreaForm: document.querySelector('.feedback-form'),
    textEmail: document.querySelector('.email'),
    textMessage: document.querySelector('.message')   
};

refs.textAreaForm.addEventListener('input', throttle(inputSaved, 1000));
refs.textAreaForm.addEventListener('submit', formSubmit);

populateTextArea ();

function inputSaved (evt) { 
    if (evt.target.name === 'email') {
        textInForm.email = evt.target.value;
    } 
    
    if (evt.target.name === 'message'){
        textInForm.message = evt.target.value;
    }
   localStorage.setItem(STORAGE_KEY, JSON.stringify(textInForm))

}

function formSubmit (evt) {
   evt.preventDefault();
   if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
   }  
   evt.target.reset();
   localStorage.removeItem(STORAGE_KEY) 
}


function populateTextArea () { 
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedMessage) {
        //textInForm = savedMessage;
        refs.textEmail.value = savedMessage.email;
        refs.textMessage.value = savedMessage.message;
        
        textInForm.email = savedMessage.email;
        textInForm.message = savedMessage.message;
   }
}  