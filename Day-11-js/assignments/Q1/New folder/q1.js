let fNameInput=document.getElementById("fname");
let lNameInput=document.getElementById("lname");
let fnameValue=document.getElementById("fname").value;
let lnameValue=document.getElementById("lname").value;

let valName=/\w{3,}/gm;

let testFName=valName.test(fnameValue);
let testLName=valName.test(lnameValue);

//! validation for first name 
let smFName=document.getElementById("vfName");

fNameInput.addEventListener("blur", function(){
    console.log(testFName);
    while(!testFName)
    {
        smFName.style.display='block';
        fNameInput.focus();
        fNameInput.select();
        fnameValue=document.getElementById("fname").value;
        testFName=valName.test(fnameValue);
    }
    smFName.style.display = 'none';
})

//! validation for second name

let smLName=document.getElementById("vlName");

lNameInput.addEventListener("blur", function(){
    if(!testFName)
    {
        smLName.style.display = 'block';
        lNameInput.focus();
        lNameInput.select();
    } else {
        smLName.style.display = 'none';
    }
})

//! mail validation

let valMail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;

let emailValue=document.getElementById("email").value;

let testEmail=valMail.test(emailValue);

let emailInput=document.getElementById("email");

let smEmail=document.getElementById("vEmail");

emailInput.addEventListener("blur", function(){
    if(!testEmail)
    {
        smEmail.style.display = 'block';
        emailInput.focus();
        emailInput.select();
    } else {
        smEmail.style.display = 'none';
    }
})
