// fetch(" https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
// .then (result=>result.json())
// .then (data=>
//     {  
       
//        data.data.map ((key)=>
//        {
//          const a=`
          
//             <div id="nav" >
//             <img id="navv" src=${key.image.thumbnail} >
//             ${key.name}
//             </div>
//         `
//         var b=document.getElementById("hh");
//         b.innerHTML+=a
//        }) 
//     })

fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
.then (result=>result.json())
.then (data=>
{  
    var ramp=data.data.slice(0,28);
    ramp.map  ((key)=>
    {    console.log(data);
        var ab=eval(key.price-10/100);
         var a=`
         <div id="nav">
         <img id="navv" src="${key.image.thumbnail}">
         <div id="strike">$${ab}<strike>$${key.price}</strike> </div>
         ${key.name}
         <div id="div12">
         <button id="btn1">Add</button> <button id="btn2" >+</button>
         </div>
         </div>
         `
         var b=document.getElementById("hh");
         b.innerHTML+=a

        //  b.addEventListener("mouseover",()=>
        //  {
        //     document.getElementById("navv").innerHTML="hiiiiiii";
        //  })
    })
})