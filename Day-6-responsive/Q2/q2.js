function validate(){
    
    let val= document.getElementById("username").value;
    if (val.length < 5) {
        document.querySelector(".warn").classList.add("d-block");
        document.querySelector(".warn").classList.remove("d-none");
    } 
    else {
        document.querySelector(".warn").classList.add("d-none");
        document.querySelector(".warn").classList.remove("d-block");
    }
}