let s=document.getElementById("ser");
s.style.transition="width 0.4s ease-in-out";

s.addEventListener("focus",function(){
    s.style.width="100%";
});

s.addEventListener("blur",function(){
    s.style.width="130px";
});


