const burger = document.querySelector('.burger');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.links');
let mode=1;
const windowWidth  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const showMenu = () => {
     burger.addEventListener('click', () => {
         if(mode==1){
            navbar.style.height = '100%';
            mode=0;
         }
         else{
            navbar.style.height = '10vh';
            mode=1;
         }
     }); 
}
links.forEach(item => {
    item.addEventListener('click', () => {
        if(windowWidth < 500){
            navbar.style.height = '10vh';
            mode=1;
        }
    });
        
    });


showMenu();