let name = prompt("Enter your name");
let x = Number(name);// string==> Nan // number ==>true
// console.log(x);

if(isNaN(x))
{
    x=name;
}
else{
    while(!isNaN(x))
    {
        alert("please enter a string");
        x=prompt("Enter valid name"); 
    }
}

let birth = prompt("enter your birthyear");
let y = Number(birth);
while(isNaN(y)) {
    alert("please enter a number");
    y=prompt("Enter valid year");
}

while(y>2010)
{
    alert("please enter a valid year");
    y=prompt("Enter valid year");
}

if (y < 2010) {
    console.log(`you are ${2023 - y} years old`);
}

document.write(`Name: ${x} <br> Birth year: ${y} <br> Age: ${2023 - y}`);