let arr=["Master the Basics: Before diving into complex JavaScript concepts, make sure you have a solid understanding of the fundamentals, such as variables, data types, functions, and control flow.",
"Use Strict Mode: Enable 'use strict' mode at the beginning of your scripts to enforce stricter parsing and error handling, which helps you write cleaner and more reliable code.",
"Avoid Global Variables: Minimize the use of global variables to prevent variable collisions and unintended side effects. Instead, use local variables and encapsulate your code in functions or modules.",
"Use Meaningful Variable Names: Choose descriptive and meaningful names for your variables, functions, and classes. This improves code readability and makes it easier for others (or your future self) to understand your code.",
"Embrace Modular Code: Break your code into smaller, reusable modules. This promotes code organization, maintainability, and reusability. Use tools like modules or bundlers (e.g., Webpack, Rollup) to manage dependencies."];

function randomJsTip(){
    let randomNum=Math.floor(Math.random()*arr.length);
    return arr[randomNum];
};

let print=randomJsTip();
document.write(print);
console.log(print);
