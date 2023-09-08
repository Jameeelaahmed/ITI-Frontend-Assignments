let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

let current=setInterval(function () {
    let currentDate = new Date();
    minutes.innerHTML = currentDate.getMinutes();
    seconds.innerHTML = currentDate.getSeconds();
    hours.innerHTML = currentDate.getHours();
},1000);

let btn=document.getElementById("btn");


function showClock(){
    let x=document.getElementById("time-started");
    if(x.style.display==="none")
    {
    x.style.display = "block";
    }
    else {
    x.style.display = "none";
    }
}

function stopClock(w){
    var keynum;

    if(w.event==="w") { // IE                  
        clearInterval(current);
    }
    
}
document.addEventListener("keydown", stopClock);