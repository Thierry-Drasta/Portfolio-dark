var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

var myEmailError = document.getElementById('myemail-error');
var sendError = document.getElementById('send-error');


function validateLoginMail() {

    var myemail = document.getElementById('email-login').value;
    
    if (myemail.length == 0 ) {
        myEmailError.innerHTML = '<h5 style="color:gray;">Required email.</h5>';
        return false;
    }
    if (! myemail.match(/^[A-Za-z \._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        myEmailError.innerHTML = '<h6 style="color:red">Incorrect email!! </h6>';
        return false;
    }
    
    myEmailError.innerHTML = '<h6 style="color:green;">Correct email. </h6>';
    return true;
    
}

function validateLoginForm(){
    if (!validateLoginMail()) {
        sendError.style.display = 'block';
        sendError.innerHTML = '<h6 style="color:yellow;">Only admin email required... </h6>';
        setTimeout(function()
        {
            sendError.style.display = 'none';
        }, 4000);
        return false;
    }
}

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHtml = 'Name is required.';
        return false;
    }
    if (! name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHtml = 'Write Full Name.';
        return false;
    }
    nameError.innerHTML = '<img src="icons/check.svg" alt="check">';
    return true;
}

// function validatePhone() {
//     var phone = document.getElementById('contact-phone').value;

//     if (phone.length == 0) {
//         phoneError.innerHTML = 'Phone No. is required.';
//         return false;
//     }
//     if (phone.length !== 10){
//         phoneError.innerHTML = 'Phone N0. should be 10 digits';
//         return false;
//     }
//     if (!phone.match(/^[0-9]{10}$/)){
//         phoneError.innerHTML = 'Only digits required.';
//         return false;
//     }

//     phoneError.innerHTML = 'valid';
//     return true;
// }

function validateMail(){

    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (! email.match(/^[A-Za-z \._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is invalid.'
        return false;
    }

    emailError.innerHTML = '<img src="icons/check.svg" alt="check">';
    return true;
}

function validateSubject(){
    subject = document.getElementById('contact-subject').value;

    if (subject.length == 0){
        subjectError.innerHTML = 'subject is required.';
        return false;
    }
    if (subject.length < 10){
        subjectError.innerHTML = 'Atleast 10 characters required';
        return false;
    }

    subjectError.innerHTML = '<img src="icons/check.svg" alt="check">';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<img src="icons/check.svg" alt="check">';
    return true;
}

function validateForm() {
    if (!validateName() || !validateMail() || !validateSubject() || !validateMessage()){

        // Hide message after few seconds.
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit.';
        setTimeout(function()
        {
            submitError.style.display = 'none';
        }, 4000);
        return false;
    }
}




