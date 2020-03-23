const burger = document.querySelector('.burger');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.links');
let mode=1;
function is_mobile() {
    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry'];
    for(i in agents) {
        if(navigator.userAgent.match('/'+agents[i]+'/i')) {
            return true;
        }
    }
    return false;
}
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
        if(!is_mobile){
            navbar.style.height = '10vh';
            mode=1;
        }
    });
        
    });


showMenu();