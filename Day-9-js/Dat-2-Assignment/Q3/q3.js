
// function validEmail(email) {
//     let cnt = 0;
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] == "@" && i != 0 && i != email.length - 1) {
//         cnt++;
//         }
//     }
//     if(cnt==0)
//     {
//         alert("Enter Valid Email");
//     }
// }

function validEmail()
{
    let email=document.getElementById("email").value;
    if(email.indexOf("@")>0 && email.indexOf("@") <email.length-1)
    {
        alert("valid email");
    }
    else
    {
        alert("not valid")
    }
}
