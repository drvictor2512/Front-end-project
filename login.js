let signupBtn = document.getElementById("signup");
let signinBtn = document.getElementById("signin");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title")
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
var submit_error = document.getElementById("submiterror");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "64px";
    title.innerHTML = "Sign up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

function validatename() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
      name_error.innerHTML = "Name is required";
      return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+$/)) {
      name_error.innerHTML = "Write full name";
      return false;
    }
    name_error.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
function validateemail() {
    var email = document.getElementById("contact-email").value;
    var emailRegex = /^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/;
    if (email.length == 0) {
      email_error.innerHTML = "Email is required";
      return false;
    }

    if (!email.match(emailRegex)) {
      email_error.innerHTML = "Invalid email";
      return false;
    }
    email_error.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
function validatepassword(){
    var password = document.getElementById("check-password").value;
    var minLength = 8;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if(password.length ==0){
        password_error.innerHTML = "Enter your password";
        return false;
    }
    if (password.length < minLength) {
        password_error.innerHTML = "Password must be at least " + minLength + " characters long";
        return false;
      }

    if(!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
        password_error.innerHTML = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character";
        return false;
      }

    password_error.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
    }
function validateform(){
    if(!validatename()|| !validateemail()|| !validatepassword()){
        submit_error.style.display = "block";
        submit_error.innerHTML = "Unsuccessfully!!!";
        setTimeout(function(){submit_error.style.display = "none"}, 3000);
        return false;
    }
}