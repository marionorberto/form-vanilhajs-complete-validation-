const form = document.querySelector('.form');
const inputFirstname = document.querySelector('#firstname');
const inputLastname = document.querySelector('#lastname');
const inputUsername = document.querySelector('#username');
const inputPhone = document.querySelector('#phone');
const inputPassword = document.querySelector('#password');
const inputRepeatPassword = document.querySelector('#repeat-password');
const inputEmail = document.querySelector('#email');
const inputCountry = document.querySelector('#country');
const inputBI= document.querySelector('#bi');


const firstnameErrors = [];
const lastnameErrors = [];
const usernameErrors = [];
const phoneErrors = [];
const passwordErrors = [];
const repeatPasswordErrors = [];
const emailErrors = [];
const biErrors = [];
const countryErrors = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    removeElementsErrorMessage();
    verifyInputErrors(
        inputFirstname.value,
         inputLastname.value,
        //   inputUsername.value,
        //     inputPhone.value,
        //     inputPassword.value,
        //     inputRepeatPassword.value,
        //     inputEmail.value,
        //     inputBI.value,
        //     inputCountry.value
        );

    const isFirstnameInvalid = firstnameErrors.length > 0;
    const isLastnameInvalid = lastnameErrors.length > 0;
    const isUsernameInvalid = usernameErrors.length > 0;
    const isPhoneInvalid = phoneErrors.length > 0;
    const isPasswordInvalid = passwordErrors.length > 0;
    const isRepeatPasswordInvalid = repeatPasswordErrors.length > 0;
    const isEmailInvalid = emailErrors.length > 0;
    const isBIInvalid = biErrors.length > 0;
    const isCountryInvalid = countryErrors.length > 0;

    if (isFirstnameInvalid) {
        removeElementsErrorMessage();
        createDivMessage(inputFirstname, firstnameErrors);
    }

    if (isLastnameInvalid) {
        removeElementsErrorMessage();
        createDivMessage(inputLastname, lastnameErrors);
    }

    // if (isUsernameInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputUsername, usernameErrors);
    // }

    // if (isPhoneInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputPhone, phoneErrors);
    // }

    // if (isPasswordInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputPassword, passwordErrors);
    // }

    // if (isRepeatPasswordInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputRepeatPassword, repeatPasswordErrors);
    // }

    // if (isEmailInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputEmail, emailErrors);
    // }


    // if (isBIInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputBI, biErrors);
    // }

    // if (isCountryInvalid) {
    //     removeElementsErrorMessage();
    //     createDivMessage(inputCountry, countryErrors);
    // }
    // if(verifyInputErrors) form.submit();
});

function verifyInputErrors(
    inputFirstname,
     inputLastname,
      inputUsername,
       inputPhone,
       inputPassword,
       inputRepeatPassword,
       inputEmail,
       inputBI,
       inputCountry
    ) {

    let flag = true;
    const validator = new Validator();

    // verify inputFirstname
    firstnameErrors.length = 0;
    if (validator.isEmpty(inputFirstname)) {
        flag = false;
        firstnameErrors.push('Firstname is empty');
    }

    if (validator.moreThanTwoWords(inputFirstname)) {
        flag = false;
        firstnameErrors.push('More than two name not allowed');
    }

    if (validator.haslessThanThreeLength(inputFirstname)) {
        flag = false;
        firstnameErrors.push('Less than three caracters not allowed');
    }

    if (validator.maxthirtyLength(inputFirstname)) {
        flag = false;
        firstnameErrors.push('More than thirty caracteres not allowed');
    }


    // verify inputLastname
    lastnameErrors.length = 0;
    if (validator.isEmpty(inputLastname)) {
        flag = false;
        lastnameErrors.push('Lastname is empty');
    }

    if (validator.moreThanTwoWords(inputLastname)) {
        flag = false;
        lastnameErrors.push('More than two name not allowed');
    }

    if (validator.haslessThanThreeLength(inputLastname)) {
        flag = false;
        lastnameErrors.push('Less than three caracters not allowed');
    }

    if (validator.maxthirtyLength(inputLastname)) {
        flag = false;
        lastnameErrors.push('More than thirty caracteres not allowed');
    }

      // verify username
    usernameErrors.length = 0;
    if (validator.isEmpty(inputUsername)) {
        flag = false;
        usernameErrors.push('Username is empty');
    }

    if (validator.moreThanTwoWords(inputUsername)) {
        flag = false;
        usernameErrors.push('No space allowed');
    }

    if (validator.haslessThanNineLength(inputUsername)) {
        flag = false;
        usernameErrors.push('Less than nine caracters not allowed');
    }

    if (validator.maxthirtyLength(inputUsername)) {
        flag = false;
        usernameErrors.push('More than thirty caracteres not allowed');
    }


      // verify phone
    phoneErrors.length = 0;
    if (validator.isEmpty(inputPhone)) {
        flag = false;
        phoneErrors.push('Phone is empty');
    }

    if (validator.haslessThanNineLength(inputPhone)) {
        flag = false;
        phoneErrors.push('Less than nine caracters not allowed');
    }

    if (validator.maxthirtyLength(inputPhone)) {
        flag = false;
        phoneErrors.push('More than thirty caracteres not allowed');
    }


      // verify password
    passwordErrors.length = 0;
    if (validator.isEmpty(inputPassword)) {
        flag = false;
        passwordErrors.push('Password is empty');
    }

    if (validator.haslessThanEightLength(inputPassword)) {
        flag = false;
        passwordErrors.push('Less than eight caracters not allowed');
    }

    if (validator.maxthirtyLength(inputPassword)) {
        flag = false;
        passwordErrors.push('More than thirty caracteres not allowed');
    }

         // verify repeat-password
    repeatPasswordErrors.length = 0;
    if (validator.isEmpty(inputRepeatPassword)) {
        flag = false;
        repeatPasswordErrors.push('Repeat Password is empty');
    }

    if (validator.haslessThanEightLength(inputRepeatPassword)) {
        flag = false;
        repeatPasswordErrors.push('Less than eight caracters not allowed');
    }

    if (validator.maxthirtyLength(inputRepeatPassword)) {
        flag = false;
        repeatPasswordErrors.push('More than thirty caracteres not allowed');
    }

    // verify email
    emailErrors.length = 0;
    if (validator.isEmpty(inputEmail)) {
        flag = false;
        emailErrors.push('Email is empty');
    }

    if (validator.haslessThanEightLength(inputEmail)) {
        flag = false;
        emailErrors.push('Less than eight caracters not allowed');
    }

    if (validator.maxthirtyLength(inputEmail)) {
        flag = false;
        emailErrors.push('More than thirty caracteres not allowed');
    }

    // verify BI
    biErrors.length = 0;
    if (validator.isEmpty(inputBI)) {
        flag = false;
        biErrors.push('BI is empty');
    }

    if (validator.haslessThanFifteenLength(inputBI)) {
        flag = false;
        biErrors.push('Less than Fifteen caracters not allowed');
    }

       // verify Country
    countryErrors.length = 0;
    if (validator.isEmpty(inputCountry)) {
        flag = false;
        countryErrors.push('Country  is empty');
    }

    return flag;
}


function createDivMessage(elementAppendable, errors) {
    const span = document.createElement('span');
    span.classList.add('text-danger');
    span.setAttribute('id', 'text-erro');

    const errrosAdded = pushMessageErrors(span, errors);

    elementAppendable.parentElement.appendChild(errrosAdded);
}


function removeElementsErrorMessage() {
    const elementAlreadyExisting = document.getElementById('text-erro');
    if (elementAlreadyExisting) elementAlreadyExisting.remove();
}

function pushMessageErrors(element, errors) {

    for (let error of errors) {
        element.innerHTML += `${error}  <br>`;
        console.log(error);
    }

    errors.length = 0;

    return element;
}

class Validator {

    isEmpty(value) {
        return value.length <= 0;
    }

    moreThanTwoWords(value) {
        return value.split(' ').length > 1;
    }

    haslessThanEightLength(value) {
        return value.length < 8;
    }

    haslessThanThreeLength(value) {
        return value.length < 3;
    }

    haslessThanFifteenLength(value) {
        return value.length < 15;
    }

    haslessThanNineLength(value) {
        return value.length < 9;
    }

    haslessThanFourteenLength(value) {
        return value.length < 14;
    }

    maxthirtyLength(value) {
        return value.length > 30;
    }

    isStringEquals(value1, value2){
            return value1 === value2; 
    }
    
}
