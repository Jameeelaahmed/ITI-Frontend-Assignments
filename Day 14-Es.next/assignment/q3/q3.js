//! 1

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.


var fruits = ["apple", "strawberry", "banana", "orange","mango"];

function isString(fruits){
    return isNaN(fruits);
}
if(fruits.every(isString))
{
    console.log("all elements of the array are strings");
}
else
{
    console.log("there are no strings");
}


// ! 2

let startWithA= fruits.some(function(fruits){
    return fruits.startsWith("a");
}) 

if(startWithA)
{
    console.log("there is an element starts with A");
}
else
{
    console.log("there are no element starts with A");
}

//! 3

let filterd= fruits.filter(function(fruits){
return (fruits.startsWith("b")||fruits.startsWith("o"));
})

if(filterd)
{
    console.log("there is O or B");
}
else
{
    console.log("there are no element includes O or B");
}

// ! 4

let newArray=fruits.map(function(ele){
    return "i like "+ele;
})

console.log(newArray);

//! 5

let print = fruits.forEach(function(ele){
    console.log(ele);
})