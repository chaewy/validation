var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var submitError = document.getElementById("submit-error");

function showError(target, message) {
    target.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
}
function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length === 0) {
        showError(nameError, "What's your name?");
    } else {
        nameError.innerHTML = "";
    }
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length === 0) {
        showError(emailError, "Email is too short");
    } else if (!email.match(/^[A-Za-z_\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        showError(emailError, "Please enter a valid email address");
    } else {
        emailError.innerHTML = "";
    }
}
function validatePassword() {
    var pw = document.getElementById("contact-password").value;
    var required = 6;
    var left = required - pw.length;
    if (left > 0) {
        showError(passwordError, `Your password must be at least (${required} characters)`);
    } else {
        passwordError.innerHTML = "";
    }
}
function validateForm() {
    validateName();
    validateEmail();
    validatePassword();

    if (nameError.innerHTML || emailError.innerHTML || passwordError.innerHTML) {
        return false;
    }
    submitError.innerHTML = "";
}
