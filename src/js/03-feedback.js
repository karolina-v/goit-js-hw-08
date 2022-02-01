import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

addData();

const formData = {
    email: formEl.email.value,
    message: formEl.message.value,    
    };

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
    formData[e.target.name] = e.target.value,
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();
   
    const dataSubmit = {
        email: e.currentTarget.email.value,
        message: e.currentTarget.message.value,
    }
    console.log(dataSubmit);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formEl.reset();
};

function addData() {
     const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    
    if (!localData)
        return;
    if (localData.email)
        formEl.email.value = localData.email;        
    if (localData.message)
        formEl.message.value = localData.message;  
}