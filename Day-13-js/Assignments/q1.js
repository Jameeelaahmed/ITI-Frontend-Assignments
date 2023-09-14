// let testLName=valName.test(lnameValue);

//! validation for first name
let fNameInput = document.getElementById("fname");
fNameInput.addEventListener("blur", function () {
    let fnameValue = document.getElementById("fname").value;
    let valName = /\w{3,}/gm;
    let testFName = valName.test(fnameValue);
    let smFName = document.getElementById("vfName");
    if (!testFName) {
        fNameInput.style.background="#ECF9FF";
        smFName.style.display = "block";
        // fNameInput.focus();
    } 
    else {
        smFName.style.display = "none";
        fNameInput.style.background="#FFF";
    }
});

//! validation for second name

let lNameInput = document.getElementById("lname"); //* lname input
lNameInput.addEventListener("blur", function () {
    let lnameValue = document.getElementById("lname").value;
    let valName = /\w{3,}/gm;
    let testLName = valName.test(lnameValue);
    let smLName = document.getElementById("vlName");
    if (!testLName) {
        smLName.style.display = "block";
        lNameInput.style.background="#FFF4D2";
        lNameInput.focus();
    } 
    else {
        smLName.style.display = "none";
        lNameInput.style.background="#FFF";
    }
});

//! mail validation

let emailInput = document.getElementById("email");

emailInput.addEventListener("blur", function () {
    let emailValue = document.getElementById("email").value;
    let valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
    let testEmail = valMail.test(emailValue);
    let smEmail = document.getElementById("vEmail");
    // * image
    let img1=document.getElementById("image1");
    let img2=document.getElementById("image2");
    if (!testEmail) {
        // smEmail.style.display = "block";
        img1.style.display="block";
        img2.style.display="none";
        emailInput.style.background="#FFF4D2";
        emailInput.focus();
    } 
    else {
        img1.style.display="none";
        img2.style.display="block";
        // smEmail.style.display = "none";
        emailInput.style.background="#FFF";
    }
});


// ! phone number 

let phoneNumInput=document.getElementById("Pnum");

phoneNumInput.addEventListener("blur",function(){
    let pNumValue=document.getElementById("Pnum").value;
    let valPNum=/(010|011|012|015})\d{8}/ig;
    let testPNum=valPNum.test(pNumValue);
    let smPNum=document.getElementById("vPNum");
    if(!testPNum)
    {
        smPNum.style.display="block";
        fNameInput.style.background="#FFF4D2";
        phoneNumInput.focus();
    }
    else
    {
        smPNum.style.display="none";
        phoneNumInput.style.background="#FFF";
    }
})

// ! password

let passInput=document.getElementById("password");

passInput.addEventListener("blur",function(){
    let passValue=document.getElementById("password").value;
    let valPass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ig;
    let testPass=valPass.test(passValue);
    let smPass=document.getElementById("vPass");
    if(!testPass)
    {
        smPass.style.display="block";
        passInput.style.background="#FFF4D2";
        passInput.focus();
    }
    else
    {
        smPass.style.display="none";
        passInput.style.background="#FFF";
    }
})

// ! confirm password

let cPassInput=document.getElementById("Cpass");

cPassInput.addEventListener("blur",function(){
    let passValue=document.getElementById("password").value;
    let cPassValue=document.getElementById("Cpass").value;
    let smCPass=document.getElementById("vCPass");
    if(!(passValue===cPassValue))
    {
        smCPass.style.display="block";
        cPassInput.style.background="#FFF4D2";
        cPassInput.focus();
    }
    else
    {
        smCPass.style.display="none";
        cPassInput.style.background="#FFF";
    }
})

//! check
let form=document.getElementById("form");
form.addEventListener("submit",function(event) 
{
    let checkbox = document.getElementById('checkTerm');
    let smChe=document.getElementById("che");
    if (!checkbox.checked)
    {
        //*checkbox
        smChe.style.display="block";
        event.preventDefault();
    }
    else
    {
        smChe.style.display="none";
    }
    //* Q2
    let rem=document.getElementById("remember-me");
    if (!rem.checked) {
        localStorage.removeItem("First-Name");
        localStorage.removeItem("password");
    } else {
        let localFnameInput = document.getElementById("fname").value;
        localStorage.setItem("First-Name", localFnameInput);
        let localPasswordInput = document.getElementById("password").value;
        localStorage.setItem("password", localPasswordInput);
    }
    //* Q2
});


//! local storage 

//* Q1 with local storage

// function storeInLocalStorage(){
//     let localFnameInput=document.getElementById("fname").value;
//     localStorage.setItem("First Name",localFnameInput);
//     let localPasswordInput= document.getElementById("password").value;
//     localStorage.setItem("password",localPasswordInput);
// }

//* Q3 
// function createCookie(event)
// {
//     var cok=new Date();
//     // var expireDate=cok.getDate()+3;
//     cok.setDate(cok.getDate()+3);

//     let cokFnameInput = document.getElementById("fname").value;
//     document.cookie="FirstName="+cokFnameInput+";expires="+cok.toDateString();
//     let cokPasswordInput = document.getElementById("password").value;
//     document.cookie="password="+cokPasswordInput+";expires="+cok.toDateString();
// }






