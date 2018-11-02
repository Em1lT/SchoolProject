

function checkRequired(){

    const fNameCheck = document.forms["form"]["firstname"].value;
    const lNameCheck = document.forms["form"]["lastname"].value;
    const email = document.forms["form"]["email"].value;
    const adress = document.forms["form"]["address"].value;
    const phoneNumber = document.forms["form"]["pnumber"].value;
    const password = document.forms["form"]["passwrd"].value;
    const postalc = document.forms["form"]["postalc"].value;
    
    if(fNameCheck == "" || fNameCheck.lenght >= 30){
        alert("first name is required. Max 30 char");
        return false;
    }else if(lNameCheck == ""|| fNameCheck.lenght >= 15){
        alert("last name is required. Max 15 characters");
        return false;
    }else if(!validateEmail(email) || email == ""){
        alert("email is required");
        return false;
    }else if(validateNumber(phoneNumber)|| phoneNumber ==""){
        alert("phone number is incorrect");
        return false;
    }else if(password == ""|| password >= 15){
        alert("set password");
        return false;
    }else if(adress != ""){
        if(!validate(adress)){
        alert("some")
        return false;
        }
       
    }else if(postalc != ""){
        if(!validate(postalc)){
        alert("some")
        return false;
        }
       
    }
    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validate(string){
    var noSpe = /^[a-zA-Z]*$/;
    return noSpe.test(string);
}
function validateNumber(phone){
    var noSpe = /{+358}{3}/;
    return noSpe.test(phone);
  }