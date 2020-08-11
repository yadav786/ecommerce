document.getElementById('nav-toggle').onclick = function(){
    if( document.getElementsByClassName('nav-list')[0].style.transform === 'translateY(0%)'){ 
        document.getElementsByClassName('nav-list')[0].style.transform = 'translateY(-120%)';
        document.getElementsByClassName('nav-list')[0].style.transition = "transform 300ms";
        return;
    }  
    document.getElementsByClassName('nav-list')[0].style.transform = 'translateY(0%)';
    document.getElementsByClassName('nav-list')[0].style.transition = 'transform 300ms';
}
 
const list = document.getElementById('pseudo-element');
list.addEventListener('click', function(ev){
            if(ev.target.tagName === 'LI'){
                ev.target.classList.toggle('done');   
            }
}, false)