let eStarr=document.querySelectorAll(".empty-star");

eStarr.forEach((star) =>{
    star.addEventListener("click",function(){
    let rate=star.getAttribute("data-rating");
    eStarr.forEach((s,i)=>{
    if(i<rate)
    {
        if(s.getAttribute("src")==="empty_star.png"){
            s.setAttribute("src","Filled_star.png");
        }
        else{
            s.setAttribute("src","empty_star.png");
        }
    }
    })
})
})

// eStarr.addEventListener("click",function(){
//     if(eStarr.getAttribute("src")==="empty_star.png")
//     {
//         eStarr.setAttribute("src","Filled_star.png");
//     }
//     else{
//         eStarr.setAttribute("src","empty_star.png");
//     }
// });

// eStarr.addEventListener("focus",function(){
//     if(eStarr.getAttribute("src")==="empty_star.png")
//     {
//         eStarr.setAttribute("src","Filled_star.png");
//     }
//     else{
//         eStarr.setAttribute("src","empty_star.png");
//     }
// })


