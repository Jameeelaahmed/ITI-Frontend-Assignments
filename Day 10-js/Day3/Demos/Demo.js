// Regular expression
// var pattern = /pattern/;
// var p = new RegExp("j.*t", "i");

// var pattern = /j*t/;
// var pattern = /j*t/i;
// var test1= pattern.test("JT");//true

// i => ignore

// var test1= pattern.test("jt");//true
// var test1= pattern.test("qtajsd");//true
// var test1= pattern.test("JT");//false


// var pattern = /j.+t/;
// var test1=pattern.test("jdddt");//true


// var pattern = /^j.*t$/i;
// var test1=pattern.test("asdjuut");//true
// var test1=pattern.test("asdjuut");//false
// var test1=pattern.test("jaaaabbt");//true
// var test1=pattern.test("jaaj//aa/*tbbt");//
// console.log(test1);


// pattern name
// a-z
// var namePattern=/^[A-Za-z]{3,6}$/;
// var namePattern=/^[A-Za-z]{3,}$/;
// var namePattern=/^[A-Za-z]{3}$/;
// var namePattern=/^[A-Za-z][0-9]{3,6}$/;
// var namePattern=/^[A-Z]{3,6}$/i;
// var test1=namePattern.test("Ahmed");//true
// var test1=namePattern.test("de");//false
// var test1=namePattern.test("t234");//false
// var test1=namePattern.test("asdasd");//true
// var test1=name/Pattern.test("Mai");//true
// var test1=namePattern.test("Mai");//true
// var test1=namePattern.test("testiopqwwwwwweerrrrrr");//true
// var test1=namePattern.test("testiopqwwwwwweerrrrrr");//false
// var test1=namePattern.test("teyuuuu");//false
// console.log(test1);


// phone pattern 
// 01(0 or 1 or 2 or 5)(8 numbers)
// var phonePattern=/^(01)(0|1|2|5)[0-9]{8}$/;
// var test1=phonePattern.test("01129650520");//true
// var test1=phonePattern.test("011296505208");//false
// var test1=phonePattern.test("0112965052");//false
// console.log(test1);


// email 
// asd@gmail or yahoo or ...  .com or .gov.eg 


// var pattern=/^[^fd]$/;
// // var x=pattern.test("artu");//true
// var x=pattern.test("fdhhjd");//false
// console.log(x);


// replace
// var str="Hello World";
// // console.log(str.replace("l","&"));
// console.log(str.replace(/l/g,"&"));


// Bom
// window.alert()

// console.log(innerWidth);
// console.log(innerHeight);
// console.log(outerHeight);
// console.log(outerWidth);
// console.log(screenLeft);
// console.log(screenTop);

// 
// console.log(window.scrollY);
// var win1;
// function openWin(){

//     win1=window.open("./Demo2.html","_blank","width=200,height=250,screenX=300,screenY=100");
//     // win1.focus();
// }
// function closeWin(){
//     win1.close();

// }

// function blueColor(){
//     win1.document.bgColor="blue";
//     win1.focus();
// }
// function redColor(){
//     win1.document.bgColor="red";
//     win1.blur();
// }

// function scrollFunc(){
//     scrollTo(0,100);
// }

// function scrollByFunc(){
//     scrollBy(0,50);
// }

// // setInterval
// //setInterval(func,time)
// var x;
// function setIntervalFunc(){
//    x=setInterval(scrollByFunc,2000);
// }
// function clearIntervalFunc(){
//     clearInterval(x);
// }

// function sayHello(){
//     alert("Hello world");
// }

// var time1;

// function setTimeFunc() {
//     // setTimeout(sayHello,3000);
//     time1 = setTimeout(function () {
//         alert("Hello world");
//     }, 3000);
// }

// function clearTimeFunc() {
//     clearTimeout(time1)
// }