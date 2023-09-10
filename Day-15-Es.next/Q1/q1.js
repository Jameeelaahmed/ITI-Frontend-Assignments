// let p1= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         var ids=[1,2,3,5];
//         if(ids)
//         {
//             resolve(ids);
//         }
//         else{
//             reject("error!!!!!!!!!")
//         }
//     },2000)
// })

// // p1.then(function(ids){
// //     console.log(ids);
// //     return p2Fun(ids[1])
// // }).then((user=>{
// //     console.log(user);
// //     return p3Fun(user.name);
// // })).then((address)=>{
// //     console.log(address);
// // }).catch(function(err){
// //     console.log(err);
// // })

// function p2Fun(id){
//     return p2= new Promise(function(resolve,reject){
//         setTimeout(function(){
//             var user ={
//                 id:id,
//                 name:"jameela",
//                 city:"Qena"
//             }
//             if(user)
//             {
//                 resolve(user);
//             }
//             else
//             {
//                 reject("error in p2 !!!!!!!!!!!")
//             }
//         },500)
//     })
// }

// // p2Fun(5).then((user)=>{
// //     console.log(user);
// // }).catch((err)=>{
// //     console.log(err);
// // })

// function p3Fun(userName){
//     return p3=new Promise(function(resolve,reject){
//         var address={
//             nAme:userName,
//             city:"Qena",
//         }
//         setTimeout(function(){
//             if(address)
//             {
//                 resolve(address);
//             }
//             else
//             {
//                 reject(address);
//             }
//         },1000);
//     })
// }

// async function handlePromises(){
//     try{
//         var id= await p1;

//         console.log(id);
        
//         var user= await p2Fun(id[1]);
        
//         console.log(user);
        
//         var address= await p3Fun(user.nAme);
        
//         console.log(address)
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// handlePromises();

var res= fetch('https://jsonplaceholder.typicode.com/users');

res.then((response)=>{
    return response.json();
}).then((data)=>{
    var div =document.createElement("div");
    document.body.appendChild(div);
    var postsContainer = document.createElement("div");
    document.body.appendChild(postsContainer);
    div.style.cssText="display:inline-block; padding:10px; background-color:#e2e1df";
    for (var nAme of data)
    {
        var btn=document.createElement("button");
        btn.setAttribute("id",nAme.id);
        btn.innerHTML=nAme.name;
        div.appendChild(btn);
        btn.style.cssText="padding:20px; margin:5px; background-color:#91C8E4; border-radius: 10px; border:white; cursor:pointer;transition:0.4s ease; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1)";
        // **** HOVER
        btn.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#f9f9f9";
        });
        btn.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#91C8E4";
        });
        // **** HOVER
        btn.addEventListener('click', async function () {
            try {
                var response = await fetch("https://jsonplaceholder.typicode.com/posts/");
                var posts = await response.json();
                postsContainer.innerHTML=" ";
                //************* */
                var btnId= this.getAttribute("id");
                for (let post of posts) {
                    if(post.userId===parseInt(btnId))
                    {
                        var div2 = document.createElement("div");
                        div2.innerHTML = `<p>${post.title}</p>`;
                        postsContainer.appendChild(div2);
                    }
                }
            } catch (err) {
                console.log("error");
            }
    });
    }
        
}).catch((err)=>{
    console.log("errrorrrr")
})