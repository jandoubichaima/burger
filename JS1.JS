
//var img = document.querySelectorAll(".aa")
//var p=document.getElementById("pp")
var li=document.querySelectorAll(".fa-star");

//img.addEventListener("click",function(){
  
  //  img.style.display="block"})
//function para(){
    //p.style.display="block";
   // p.classList.toggle('block') ; }
    for (var i = 0; i < li.length; i++)
       var a = 0
    li[i].addeventlistener("click", function () {
        if (a == 0) {
            a = a + 1
            li[i].style.color = "yellow";
        }
        else {
            li[i].style.color = "white";
            a = 0
        }
    })
//for (let i = 0; i < p.length; i++) {
    //p[i].addEventListener("click",function(){
    // p[i].classList.toggle('block')   })


   for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click",function(){
       li[i].classList.toggle('yellow')    })}


   