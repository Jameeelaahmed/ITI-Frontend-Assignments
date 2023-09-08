function checkBirthDate()
{
    let birthDate=prompt("enter your birthdate");

    console.log(birthDate.length)
    
    if((birthDate.charAt(2) === "-" && birthDate.charAt(5)==="-") && birthDate.length===10)
    {
        let day = parseInt(birthDate.substring(0,2));
        let month= parseInt(birthDate.substring(3,5))-1;
        let year = parseInt(birthDate.substring(6,10));
    
        let date = new Date(year,month,day);
    
        alert(date.toDateString());
    }
    else
    {
        birthDate= prompt("enter a valid DATE!");
    }
}


let myBtn=document.createElement("button");

myBtn.innerHTML="Enter BirthDate";
myBtn.onclick=checkBirthDate;

document.body.appendChild(myBtn);