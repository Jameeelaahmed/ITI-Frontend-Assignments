// ! A TYPES
var x:number=3;
var y:string="Jameela";
var z:boolean=true;
console.log(`${x} 
${y}
${z}`);

//! B UNION TYPES

var arr:(number|string)[];
arr=[1,2,"jameela"];

//! C FUNCTION 

function test1(num1:number,num2:number):number{
    return num1+num2;
}
console.log(test1(1,2));

//! D ENUM

enum test{
    admins=10,
    customer,
}

console.log(test.customer);

//! F GENIRIC 

function arra<T>(x:T[])
{
    return x;
}

var str =arra<string>(["jameela","ahmed"]);
console.log(str);






