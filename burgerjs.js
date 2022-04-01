

var eyee=document.querySelector('.fa-eye');
var eyeoff=document.querySelector('.fa-eye-slash');
var pas=document.querySelector('input[type=password]');

eyee.addEventListener('click',()=>{
    eyee.style.display="none";
    eyeoff.style.display="block";
    pas.type="text";
});
eyeoff.addEventListener('click',()=>{
    eyeoff.style.display="none";
    eyee.style.display='block';
    pas.type="password";
});

let li=document.querySelectorAll('fa-star');
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click",()=>{
     li[i].classList.toggle('yellow')   

}
)}
var sbtn=document.querySelector('#btn');
var sform=document.querySelector('.header .search');
sbtn.onclick =()=>{
    sbtn.classList.toggle('fa-times');
    sform.classList.toggle('.active');
}
//plus moin --------------------
pluss=document.querySelectorAll('.plus');
moinn=document.querySelectorAll('.moin')
for(let i=0;i<pluss.length;i++){
    pluss[i].addEventListener("click", function () {
        
         if (pluss[i].nextElementSibling.innerHTML <= 15) {
             pluss[i].nextElementSibling.innerHTML++;
         }
     })}
     for(let i=0;i<moinn.length;i++){
    moinn[i].addEventListener("click", function () {
       
         if (moinn[i].previousElementSibling.innerHTML > 0) {
             moinn[i].previousElementSibling.innerHTML--;
         }
     })}