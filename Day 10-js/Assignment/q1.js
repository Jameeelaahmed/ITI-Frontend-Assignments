let name= prompt("Enter your name");

let email= prompt("Enter your email");

let regName=/^[a-zA-Z]{3,}\s([a-z A-Z]{3,})*$ /;

let regEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.eg)$/;

while(!name.match(regName))
{
    name=prompt("Enter Valid Name");
}

while(!email.match(regEmail))
{
    email=prompt("Enter Valid Name");
}

// let fullName = "";
// let email = "";

// const nameRegex = /^[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.eg)$/;

// while (!fullName.match(nameRegex)) {
//   fullName = prompt("Please enter your full name (alphabetic only) with the following structure: Characters (alphabetic only) more than 3. Then one space. And finally some other characters (alphabetic only) more than 3. This pattern may be repeated, so it can contain other spaces but after each space must be 3 alphabetic characters at least (like full name, each part is 3 letters at least, and separated by a space). And shouldn’t start or end with spaces or special characters.");
// }

// while (!email.match(emailRegex)) {
//   email = prompt("Please enter your email address from Egypt (.eg domain), for example name@domain.com.eg (.com.eg, .net.eg, .edu.eg or .org.eg [.eg is a must], don’t allow any other domains).");
// }

