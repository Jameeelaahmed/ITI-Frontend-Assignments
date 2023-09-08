"use strict"
// alert("Hello from external file");

// declare variable
// var x=3;
// alert(typeof x);
// var str="Hello";
// alert(typeof str);

// var test=true;
// alert(typeof test);

// var c='a';
// alert(typeof(c));

// var y=null;
// alert(typeof y);

// var x;
// alert(x);

// var firstname="ali";
// alert(firstname);

// var x=4;
// alert(x);

// scopes
// local scope && global scope

// global
// var y=9;
// function func1(){
//     // lines
//     // local
//     // var x=3;
//     // alert(x);

//     alert(y);
// }
// // alert(x);
// // call
// func1();
// alert(y);


// hoisting
// alert(num);
// var num=2;
// alert(num);



// var y;
// alert(y);//undefined
// y=6;
// alert(y);//6


// ignore space
// var x            =         "       7";
// var x            =         7;
// alert(x);

// document.write("Hello World!!");
// document.write("<br> Another Hello World!!");

// var x=7;
// document.write(x);


// Unary operators
// prefix
// var y=6;
// var x=++y;//1-increment 2-assign
// alert(y);//7
// alert(x);//7


// postfix 
// var y=6;
// var x=y++;//1-assign 2-increment
// alert(y);//7
// alert(x);//6

// var num1=3;
// var num2=5;
// alert(num2-num1);

// var num=3;
// num+=2;
// alert(num);

// var x=7;
// var y="7";

// if - else
// == compare with value
// if(x==y){
//     alert("x equal y");
// }
// else{
//     alert("x not equal y");

// }


// === compare value and type
// if(x===y){
//     alert("x equal y");
// }
// else{
//     alert("x not equal y");

// }

// if(x!=y){
//     alert("x not equal y");

// }
// else{
//     alert("x equal y");

// }

// var z=!true;
// alert(z)

// var str1="hello";
// var str2="world";
// alert(str1+" "+str2);

// var num=3;

// if(num<5){
//     alert("num is less than 5");
// }
// else{
//     alert("num is greater than 5");

// }

// ternary operator => conditional operator
// ()?true:false
// (num<5)?alert("num is less than 5"):alert("num is greater than 5");
// var res=(num<5)?"num is less than 5":"num is greater than 5";
// alert(res);

// var x,y=1;

// var num = 5;
// switch (num) {
//     case 1:
//         alert("you are in case 1");
//         break;

//     case 2:
//         alert("you are in case 2");
//         break;

//         default:
//         alert("you are in default");

// }


// for(var i=0;i<=4;i++){
//     alert(i);
// }

// var i=2;

// while(i<5){
//     alert(i);
//     i++;
// }

// 
// var i=1;
// do{
//     alert(i);
//     i++;
// }while(i<4);

// prompt("Enter Your name","First Name");
// var x=prompt("Enter Your name");
// document.write(x);

// var res=confirm("Are you sure?");
// if(res==true){
//     document.write("Ok Case");
// }
// else{
//     document.write("Cancel case");
// }
// var x=0e11111
// var res=parseInt("5e33");
// var res=parseFloat("5.44a");
// var res=Number("5.44a");
// var res=Number("5");
// document.write(typeof res);
// document.write(res);

// NaN => not a number


// var x="asd";
// var res=isFinite(x);
// alert(res)


// var c= 1e4445
// document.write(isNaN("a33"))

// document.write(3*4+6-1/2);

// var x=prompt("Enter number");
// var y=parseInt(x);
// document.write(typeof y);