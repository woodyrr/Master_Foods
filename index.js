//navigation button anition togle start
let openBtn = document.querySelector('.nav-open-btn')
let line = document.querySelectorAll('.line')

openBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    openBtn.classList.toggle("active");
}
//navigation button anition togle end

//navigation button anition togle start
// let chevron = document.querySelector('.fa-chevron-down')
let overlay1= document.getElementById('overlay1')
let overlay2= document.getElementById('overlay2')
let overlay3= document.getElementById('overlay3')
secondchild1 = overlay1.getElementsByTagName('div')[2];
secondchild2 = overlay2.getElementsByTagName('div')[2];
secondchild3 = overlay3.getElementsByTagName('div')[2];
let chevron1 = document.querySelector('.chevron-down1')
let chevron2 = document.querySelector('.chevron-down2')
let chevron3 = document.querySelector('.chevron-down3')
// let chevron = document.querySelectorAll('.chevron')
overlay1.addEventListener('click', ()=>{
    secondchild1.classList.toggle('overflow-hidden')
    secondchild1.classList.toggle('h-0')
    secondchild1.classList.toggle('active')
    chevron1.classList.toggle('active')
})
overlay2.addEventListener('click', ()=>{
    secondchild2.classList.toggle('overflow-hidden')
    secondchild2.classList.toggle('h-0')
    secondchild2.classList.toggle('active')
    chevron2.classList.toggle('active')
})
overlay3.addEventListener('click', ()=>{
    // secondchild3.classList.toggle('hidden')
    secondchild3.classList.toggle('overflow-hidden')
    secondchild3.classList.toggle('h-0')
    secondchild3.classList.toggle('active')
    chevron3.classList.toggle('active')
    
})
        

