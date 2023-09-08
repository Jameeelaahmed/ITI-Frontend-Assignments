// Coercion
// var x=2;
// var y="4";
// // var res=x+y;
// var res=x-y;
// // document.write(res);
// document.write(typeof res);


// for of && for in
// var arr = ["item1", "item2", "item3", "item4"];
// alert(arr[1])
// for(var i=0;i<arr.length;i++){
//     alert(arr[i]);
// }


// return value
// for (var item of arr) {

//     alert(item);
// }

// return index
// for (var item in arr) {

//     // alert(item);
//     console.log(item)
// }


// class test{
//     property
//     methods
// }


// objects
// value type
// var str="Hello world";
// console.log(str.length);
// console.log(str.charAt(0));//H
// console.log(str.indexOf("h"));//-1
// console.log(str.indexOf("H"));//0
// console.log(str.indexOf("l"));//0
// console.log(str.lastIndexOf("l"));
// reference type
// var str1=new String("hello");
// console.log(str.substring(2));
// console.log(str.substring(2,9));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// console.log(x);//error
// const x=3.14;
// console.log(x);
// const x=6
// console.log(x);//error

// console.log(Math.PI);

// console.log(Math.max(2.3,2.4,2.56,2));//7
// console.log(Math.max(2,4,6,1,7));//7
// console.log(Math.min(2,4,6,1,7));//1

// console.log(Math.sqrt(25));//5
// console.log(Math.pow(2,3));//8

// console.log(Math.floor(3.5));//3
// console.log(Math.ceil(3.5));//4
// console.log(Math.round(3.4));//3

// console.log(Math.round(Math.random()*10));

// array
// var arr=[1,2,3];

// var arr=new Array(3);
// arr=[3,6,1];
// console.log(arr);

// arr=new Array(6)
// console.log(arr);

// var arr;
// arr=[6,3,2,6,7];
// console.log(arr.length);

// var arr=["item1","item2","item3","item4"];
// var arr=[3,4,5,6];
// var arr=[3,"item",true];

// var res=arr.join("&");
// // console.log(typeof res);
// console.log(res);

// var res=arr.reverse();
// console.log(res);

// var arr=["item1","item2*","item3"];
// var arr=["item2","item1","item3"];
// var arr=[2,1,3,10,5,11,21,2.2,22];
// var res=arr.push("item4");
// console.log(res);
// arr.pop();
// arr.unshift("item0","test","asd");
// arr.shift();
// console.log(arr);

// console.log(arr.sort());


// var arr=[2,4,6,8,7,9,4,1,12];

// callback function
// pass function as parameter to another function

// find return firest matched value
// var res=arr.find(function(item){
//     return item>6;
// })
// console.log(res);
// 

// filter return array of matched 
// var res = arr.filter(function(x){

//     return x>6;
// })
// console.log(res);

// function test(item){
//     return item>6;
// }

// var res=arr.find(test)
// console.log(res);

// object
// var object1={key:value,key:value}

// var object1={
//     name:"Ali",
//     age:23,
//     passed:true

// };
// console.log(object1.name);
// console.log(object1.age);

// var emp={
//     empName:"Ahmed",
//     empAge:25,
//     salary:100,
//     skills:["html","css","js","bootstrap"],
//     department:{
//         departmentName:"IS",
//         depNum:2
//     }
// };

// // console.log(emp.skills[1]);
// console.log(emp.department.departmentName);

// array of objects
// var students=[
//     {},{},{}
// ];

// var students=[
//     {
//         stdName:"Mohamed",
//         age:20,
//         stdId:1,
//         address:{
//             city:"Qena",
//             street:"street1"
//         }
//     },
//     {
//         stdName:"Ahmed",
//         age:21,
//         stdId:2,
//         address:{
//             city:"Sohag",
//             street:"street2"
//         }
//     }
// ];
// // console.log(students.join());
// students[0].address.street="asd"
// console.log(students[0].address.street);
// console.log(students[1].stdId);
// console.log(students[1].address.city);

// add function in object
// var obj={
//     name:"asd",
//     id:8,
//     printData:function(){
//         // console.log(obj.name);
//         console.log(this.name);
//     }
// };
// obj.printData();

// Date object
// var date1=new Date();
// console.log(date1);
// console.log(date1.getMonth());
// date1.setDate(26);
// console.log(date1.toDateString());

// let

// var global scope
// for(var i=0;i<4;i++){
//     console.log(i);
// }
// console.log(i);
// var i=9;
// console.log(i);

// 
// var x=9;
// var x=5;
// console.log(x);

// let y=9;
// // let y=5
// console.log(y);

// const z=9;
// z=5;
// console.log(z);//error


// for(let i=1;i<5;i++){
//     console.log(i);

// }

// var x=6;
// if(true){
//     console.log(x);

//     if(x<7){
//         console.log(x);
//     }
// }


// if (true) {
//     let x = 6;
//     console.log(x);

//     if (true) {
//          x = 7;
//         console.log(x);
//     }
// }

// function test(){

//     var x=5;

//     if(x<7){
//         var x=3;
//         console.log(x);
//     }
//     console.log(x);

// }

// function test(){

//     let x=5;

//     if(x<7){
//         let x=3;
//         console.log(x);
//     }
//     console.log(x);

// }

// test();

// console.log(x);
// let x=6;