//var w=undefined , let s , const a

//var   let   const

// var x=10     //number

// let y=60


// const z=30

// console.log(x,y,z);


//1- intialization

// const age;  //xxxxxx
// console.log(age);



//2- Redeclaration

// const id=2
// const id=20 

// console.log(id);


//3- Reassign

// const age=15
// age=40

// console.log(age);



//4- Hoisting

// console.log(w);
// var w=20
// console.log(w);


// console.log(s);
// let s="mona"

// console.log(a);
// const a=50

//function statement  , function declaration
// printData()

// function printData(){
// console.log("Hello Es.Next");

// }


//5- Scope
//global  , local(functional)  , block scope

// const c=60     //global scope


// function printData() {

//     const w = 3  //local scope
//     // console.log(c);
//     console.log(w);
//     console.log("Hello Es.Next");

// }

// printData()

// console.log(w); //xxxxxxxxx


//let , const


// var temp=40

// if(temp>=35){
//     let str="hello"
//     console.log(str);
//     console.log("hot");
// }else{
//     console.log("cold");
// }

// console.log(str);



// {
//     const t=80;
//     let r=10
//     console.log(t , r);
// }

// console.log(t , r);


// for(let i=0;i<5;i++){

//     console.log(i);
// }

// console.log(i);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//arrow function

// var sum=a=>a
 
//  console.log(sum(2)); 


// var emp={
//     id:1,
//     name:"ali",
//     salary:1000,
//     display:function(){
//         // console.log(this);
//        setTimeout(()=>{
//              console.log(this);
//             console.log(this.id,this.salary);

//         },2000)
//     }
// };

// emp.display()


//search   arguments 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//destructuring

// var arr=[10,20,30,"hello",true]

// const [a1,,,,a5]=arr


// var student={
//     id:3,
//     name:"salma",
//     age:15
// }


// // var id=student.id
// // var name=student.name
// // var age=student.age


// var {id,age,name:nm}=student

////////////////////////////////////////////////////////////////////////////////////////////////////////
//spread operator 

// var arr1=[10,20,30,40]
// var arr2=[50,60,70,80]

// // var arr3=arr1.concat(arr2)

// var arr3=[...arr1,...arr2]

// var names=["ali","salma","omar","karim"]

// // var newNames=names

// var newNames=[...names]

// names[0]=20


// var student={
//     id:3,
//     name:"salma",
//     age:15
// }


// var newStudent={...student}


//Rest parameter

// function test(a,...x){

//    console.log(a,x);
// }


// test(20,"hello",50)
// // test(10,20)
// // test(2)

//////////////////////////////////////////
//template literal   , string literal


// var emp={
//     id:1,
//     name:"ali",
//     salary:1000,
//     display:function(){
   
//      console.log(`welcome your name is ${this.name} and your age is ${calcAge(1995)}`);
//     }
// }
// emp.display()


// function calcAge(yearBorn){


//     return 2023-yearBorn
// }


//////////////////////////////////////////////////////////////////////////
//default parameter

// function sum(x=3,y=5){
//     // console.log(x,y);
//     console.log(x+y);
// }

// sum(6,3)

//////////////////////////////////////////////////////////////////////////
//string methods
//startsWith    , endsWith  , includes , padStart , padEnd

// var str2="hello"

// var str3="***"+str2+"****"

// console.log(str2.startsWith("l",2)); 

// console.log(str2.endsWith("o")); 

// console.log(str2.includes("l")); 


// console.log(str2.padStart(10,"_"));
// console.log(str2.padEnd(10,"_"));

////////////////////////////////////////////////////////////////

//array methods
//map  , flat

var years=[2000,2005,1995,2002]


var i=years.find(function(ele){

return ele>2000
})

console.log(i);
// var result= years.map(function(ele , index, arr){

//     // console.log(ele , index , arr);

//     return ele+" years"
// })


// console.log(result);


// var nestedArr=[10,20,30,["hello",80,60,[true,200]],50]

// console.log(nestedArr.flat(2)); 



var a=10

var b=20


test(10,80,200,5,1,6)