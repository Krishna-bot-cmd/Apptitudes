function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction1() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function opena() {
    document.getElementById("myNav").style.width = "100%";
}

function closea() {
    document.getElementById("myNav").style.width = "0%";
}

function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
}

function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
}

var input = document.getElementById("psw");
var text = document.getElementById("text");


input.addEventListener("keyup", function()
{
if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});
function myFunction1() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
 var password = document.getElementById("password"),Confirm_password = document.getElementById("confirm_password");
	 
	 function validatePassword()
	 {
	 if(password.value != confirm_password.value)
     {
     Confirm_password.setCustomValidity("does not match");
     }
     else
     {
     confirm_password.setCustomValidity('');
     }
     }	 
	 password.onchange = validatePassword;
	 confirm_password.onkeyup=validatePassword;
	 
function myFunction4() {
    var x = document.getElementById("dept");
    x.value = x.value.toUpperCase();
}

function logout()
{
 if(confirm("Are you sure you want to logout?"))
 location.href="homepag.html"
}


function openc() {
    document.getElementById("1nav").style.width = "100%";
}

function closec() {
    document.getElementById("1nav").style.width = "0%";
}
function hover() {
    var popup = document.getElementById("tool");
    popup.classList.toggle("show");
}





