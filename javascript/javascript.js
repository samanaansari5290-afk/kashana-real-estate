//registration//
const accountBtn=document.querySelector('.account-btn');
const accountDropdown=document.querySelector('.account-dropdown');

accountBtn.addEventListener('click',function(event){
    event.stopPropagation();
    accountDropdown.classList.toggle('show');
});
document.addEventListener('click',function(){
    accountDropdown.classList.remove('show');
});
accountDropdown.addEventListener('click',function(event){
    event.stopPropagation();
    
});

//properties cards, prev & next //

const propertyCards=document.querySelectorAll('.property-image');
    propertyCards.forEach(function(card){
        const images=card.querySelectorAll('img');
        const nextBtn=card.querySelector('.next');
        const prevBtn=card.querySelector('.prev');

        let currentIndex=0;
nextBtn.addEventListener('click',function(){
    images[currentIndex].classList.remove('active');
    currentIndex++;
    if(currentIndex>=images.length){
        currentIndex=0;
    }

images[currentIndex].classList.add('active');
});
  
prevBtn.addEventListener('click',function(){
    images[currentIndex].classList.remove('active');
    
    currentIndex--;
    if (currentIndex<0){
        currentIndex=images.length-1;
    }
    images[currentIndex].classList.add('active');
});
});

//menu bar//
const menuToggle =
document.querySelector('.menu-toggle');

const navMenu=
document.querySelector('.nav-menu');
menuToggle.addEventListener('click',function(){
    navMenu.classList.toggle('show');
    });



        
        
     