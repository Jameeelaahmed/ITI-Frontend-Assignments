// document.getElementById("input1").value="Enter Name test";

// document.getElementsByName("inputName")[1].value="enter name";

// document.getElementsByTagName("input")[1].value="enter name";

// document.getElementsByClassName("class1")[0].value="Enter Name test";

// document.querySelector("#input1").value="test";
// document.querySelector(".class1").value="test";
// document.querySelectorAll(".class1")[0].value="new value";

// document.getElementById("img1").src="./flowerimg.jpg";
// document.getElementById("img1").width="300";


// document.getElementById("img1").setAttribute("src","./flowerimg.jpg")


// document.getElementsByTagName("p")[0].style.color="red";
// document.getElementsByTagName("p")[0].style="color:blue;background-color:lightblue";
// document.getElementsByTagName("p")[0].setAttribute("style","color:blue;background-color:lightblue");

// document.getElementsByTagName("p")[0].style.backgroundColor="red";

// var para=document.getElementsByClassName("class1");
// console.log(para.length);

// for(var i=0;i<para.length;i++){
//     para[i].style.color="red";
// }

// var x=document.getElementById("img1");

// function mouseOverFunc(){
// // document.getElementById("img1").src="./flowerimg2.jpg";
// x.src="./flowerimg2.jpg";
// document.getElementById("img1").height="300";
// }

// function mouseOutFunc(){
//     document.getElementById("img1").src="./flowerimg.jpg";
// }

// function func1(){
//     document.getElementsByTagName("body")[0].style.backgroundColor="blue";
// }

// function focusFunc(){
//     document.getElementById("input1").style.backgroundColor="yellow";
// }

// function blurFunc(){
//     document.getElementById("input1").style.backgroundColor="white";
// }


// event handling
// document.getElementById("para").onclick=sayHello;

// function sayHello(){
//     alert("Hello from function")
// }
// document.getElementById("para").onclick=function(){
//     alert("hellllllo");
// }


// document.getElementById("para").addEventListener("mouseover",function(){
//     alert("Hello from function")
// })

// document.getElementById("para").addEventListener("click",sayHello)


// add new element
// var para=document.createElement("p");
// // innerHtml
// para.innerHTML="Para3 from js";
// var divEle=document.getElementById("div1");
// // divEle.appendChild(para);
// var para2=document.getElementById("para2");
// divEle.insertBefore(para,para2)



// ###################

// document.getElementsByTagName("div")[0].innerHTML="<h1>hello div1</h1>";
// document.getElementsByTagName("div")[0].innerText="<h1>hello div1</h1>";
// document.getElementsByTagName("div")[0].textContent="<h1>hello div1</h1>";

// var x=2;
// document.getElementsByTagName("div")[0].innerHTML="number is = "+x;
// var y=9;
// document.getElementsByTagName("div")[0].innerHTML=`number is = ${x} hello ${y}`;


// 

// var x=document.getElementById("input1");
// function checkFunc(){
// if(x.checked==true){
//     alert("you checked the input")
// }
// else{
//     console.log("you dont checked input");
// }
// }