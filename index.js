
var form = document.getElementById("loginForm");
var username = document.getElementById("username");
var pwd = document.getElementById("password");

var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");

function validate() {
    let usercheck = /^admin$/;
    let passcheck = /^12345$/;
}
    // Validate username
    if (usercheck.test(username.value)) {
        err1.innerHTML = "";
    } else {
        err1.innerHTML = "Username is Invalid";
        err1.style.color = "red";
        return false;
    }

    // Validate password
    if (passcheck.test(pwd.value)) {
        err2.innerHTML = "";
    } else {
        err2.innerHTML = "Password is Invalid";
        err2.style.color = "red";
        return false;
    }

    
    redirectToMainPage();
    return false; 


function redirectToMainPage() {
    window.location.href = 'main.html';
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    validate(); 
});

document.addEventListener('DOMContentLoaded', function() {
  
   document.getElementById("logoutLink").addEventListener('click', function(event) {
       
       event.preventDefault();
       
       
       window.location.href = 'login.html';
   });
});

