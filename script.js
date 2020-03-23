const burger = document.querySelector('.burger');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.links');
console.log(navbar);
let mode=1;
const showMenu = () => {
     burger.addEventListener('click', () => {
         if(mode==1){
            navbar.style.height = '100vh';
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
        if(screen.width < 500){
            navbar.style.height = '10vh';
            mode=1;
        }
    });
        
    });


showMenu();