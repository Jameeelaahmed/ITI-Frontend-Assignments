let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let currentInterval;

// Create the input element and append it to the body
let inp = document.createElement("input");
inp.setAttribute("id","inpu");
document.body.appendChild(inp);
inp.style.cssText = "display: none; position: absolute; top: 200px; right: 650px; margin: 10px; padding: 10px";


function updateClock() {
    let currentDate = new Date();
    minutes.innerHTML = currentDate.getMinutes();
    seconds.innerHTML = currentDate.getSeconds();
    hours.innerHTML = currentDate.getHours();
}

currentInterval = setInterval(updateClock, 1000);

let btn = document.getElementById("btn");

function showClock() {
    let x = document.getElementById("time-started");
    if (x.style.display === "none") {
        x.style.display = "block";
        inp.style.display = "block";
    } else {
        x.style.display = "none";
        inp.style.display = "none";
    }
}


// Add CSS styles for the input field when it's focused
inp.style.outlineColor = "#635985";
let val;
// Listen for the input field's focus event
inp.addEventListener("focus", function () {
    inp.style.outlineColor = "#635985";
});

//!  Q1 BONUS 

//****  stops the clock when press w in keyboard */
// function stopClock(event) {
//     if (event.key === "w" && !event.altKey) {
//         clearInterval(currentInterval);
//         alert("Clock stopped!");
//     }
// }
// document.addEventListener("keydown", stopClock);

//** stops clock when type w in input field */
// Listen for the input field's blur event (when it loses focus)
inp.addEventListener("blur", function (event) {
    inp.style.outlineColor = ""; // Reset to the default outline color
    val=document.getElementById("inpu").value;
    if (val=== "w"){
        clearInterval(currentInterval);
    }
});

inp.addEventListener("input", function (event) {
    // Check if the input field is focused
    if (document.activeElement === inp) {
        alert("Key code: " + event.data.charCodeAt(0)); // Display the key code
    }
    if (event.data === "w") {
        event.stopPropagation(); // Cancel event bubbling
    }
});






