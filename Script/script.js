// Gettting all the form elements - form element, buttons, radio button and inputs

const newUser = document.getElementById("registration-form");
const modal = document.getElementById("modal-box");
const closeBtn = document.getElementById("close-modal");
const logInBtn = document.getElementById("logIn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fRadioBtn = document.getElementById("female");
const mRadioBtn = document.getElementById("male");
const customGenderBtn = document.getElementById("custom");
const emailAlert = document.querySelector(".email-required");
const passAlert = document.querySelector(".pass-required");
const logInForm = document.getElementById("main-form");
const alertEmail = document.querySelector(".email-invalid");
let customInputs = document.getElementById("custom-gender");


// This opens up a sign up form in a modal 
newUser.addEventListener("click", (ev) => {
    ev.preventDefault();
    modal.style.display = "block"
})

// This is to close the modal when we click on the "X" button

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

/* This is also to close the modal when we click outside the modal content.
 Because modal has a container (.modal-box) background that covers the whole window, we check wether user has clicked in that area.*/

window.onclick = function (ev) {
    if (ev.target == modal) {
        modal.style.display = "none";
    }
}

//This expands the sign-up form when we click on the custom gender radio button

customGenderBtn.addEventListener("change", () => {
    customInputs.style.display = "block";
})

/* This is to close the custom gender options, when we click on the other radio buttons, male or female */

fRadioBtn.addEventListener("click", () => {
    customInputs.style.display = "none";
})

mRadioBtn.addEventListener("click", () => {
    customInputs.style.display = "none";
})


//This is for validating only the Sign in form
/* Here we  create an array where we store our functions that do the validation using Regular Expressions. We loop through all the functions, and if ALL of them return true, the sign in is successful. We store all the data we extracted from the inputs into an object, and we log the object into a console */

let fns = [];
let data = {};

logInForm.addEventListener("submit", (ev) => {
    ev.preventDefault(); // This prevents the default behaviour of forms
    for (let i = 0; i < fns.length; i++) {
        if (fns[i]() === false) {
            return;
        }
    }
    console.log("Verified data: ", data);
    logInForm.reset(); // This is to clear the inputs if loggin is succesful
    alert("You have succesfully logged in!") // And alert the user
    return true;
})

function processEmail() {
    let emailVal = email.value;
    const email_pattern = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

    if (email_pattern.test(emailVal) === false) {
        alertEmail.style.display = "block"; /* This alerts the user if email field is empty or incorrect pattern, by displaying an alert under the input field */
        return false;
    } else if (email_pattern.test(emailVal)) {
        alertEmail.style.display = "none";   //This removes the alert, if email is present and in a correct format.
    }

    data.email = emailVal;  // Here we store the email in the object we created above, ann display it in the console.
    return true;
}

fns.push(processEmail); // We add our function in the array

/*  This function checks whether password has at least 6 characters, one uppercase, and one lowercase letter, as well as one non alphanumeric character*/

function processPassword() {
    let pass = password.value;
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let digit = /[0-9]/;
    let other = /[^a-zA-Z0-9]/;

    if (lowercase.test(pass) === false) {
        passAlert.style.display = "block"; // Alerts the user by diplaying a box under the input if any of the conditions has not been met
        return false;
    }
    if (uppercase.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    if (digit.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    if (other.test(pass) === false) {
        passAlert.style.display = "block";
        return false;
    }
    passAlert.style.display = "none"; // If conditions are met the box is removed.
    data.password = pass; // And email data is added to the obejct
    return true;
}

fns.push(processPassword); // Here we add the function to the array










