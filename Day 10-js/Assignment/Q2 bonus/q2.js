let days=document.getElementById("days");
let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let sec=document.getElementById("sec");


var countDownDate = new Date("Jun 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
let now = new Date().getTime();

let calcDate = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var calcDays = Math.floor(calcDate / (1000 * 60 * 60 * 24));
  var calchours = Math.floor((calcDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var calcMinutes = Math.floor((calcDate % (1000 * 60 * 60)) / (1000 * 60));
  var calcSeconds = Math.floor((calcDate % (1000 * 60)) / 1000);

  days.innerHTML=calcDays;
  hours.innerHTML=calchours;
  minutes.innerHTML=calcMinutes;
  sec.innerHTML=calcSeconds;


  // If the count down is finished, write some text
  if (calcDate < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "EXPIRED";
  }
}, 1000);