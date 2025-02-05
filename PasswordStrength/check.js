
function createPassword() {
  let userPrd = prompt("Enter Password");
  
  checkLength(userPrd);
  checkForUppercase(userPrd);
  specialChar(userPrd);
  
  if (specialChar() == true && checkLength() == true && checkForUppercase() == true) {
    alert("Congratulations! Your password is strong!");
  }
  else {
    alert("Weak Password!");
  }
  
}

function checkLength(userPrd) {
  if (userPrd.length >= 8) {
    document.getElementById('need1').style.color = "green";
    
    return true;
  }
  else {
    document.getElementById('need1').style.color = "red";
    
    return false;
  }
}

function checkForUppercase(userPrd) {
  if (/[A-Z]/.test(userPrd)) {
    document.getElementById('need2').style.color = "green";
    
    return true;
  }
  else {
    document.getElementById('need2').style.color = "red";
    
    return false;
  }
}

function specialChar(userPrd) {
  if (/[^a-zA-Z]/.test(userPrd)) {
    document.getElementById('need3').style.color = "green";
    
    return true;
  }
  else {
    document.getElementById('need3').style.color = "red";
    
    return false;
  }
}


