
// * validation code 
let validName=/\S[a-zA-z]{3,}(\s[a-zA-z]{3,})*\S$/ig;
let validMail=/\w+@\w+(.com|.net|.edu|.org).eg$/ig;

// ? NAME
let name1= prompt("Enter your FULL name");//ja
let testName=validName.test(name1);


while(!testName){
    alert("enter valid name!!");
    testName=validName.test(name1);
    name1= prompt("Enter your FULL name");
}

//? EMAIL
let mail= prompt("Enter your email address");
let testMail=validMail.test(mail)

while(!testMail){
    alert("enter valid email!!");
    testMail=validMail.test(mail);
    mail= prompt("Enter your Email");
}


