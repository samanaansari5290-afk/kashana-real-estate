

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

const propertyCards = document.querySelectorAll(".property-image");

propertyCards.forEach(function(card) {
    const images = card.querySelectorAll("img");
    const nextBtn = card.querySelector(".next");
    const prevBtn = card.querySelector(".prev");

    let currentIndex = 0;

    nextBtn.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    });

    prevBtn.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add("active");
    });
});


// details card page//

function openPropertyDetails(id){
    window.location.href=
    "property-details.html?id=" + id;
}

const params=new
URLSearchParams(window.location.search);
const propertyId=params.get("id");


const properties={
    1:{
        title:"آپارتمان سه منزله",
        location:"جاده ولایت، هرات",
        price:"50,000,000افغانی",
        bedrooms:"2",
        bathroom:"1",
        area:"180"
    }
    
};
const titleElement= document.getElementById("property-title");
if(titleElement && propertyId && properties[propertyId]){
    const property= properties[propertyId];
    titleElement.textContent=property.title;


  document.getElementById("property-bedrooms").innerHTML =
    '<i class="fa-solid fa-bed"></i> ' + property.bedrooms + ' اتاق خواب';

document.getElementById("property-bathroom").innerHTML =
    '<i class="fa-solid fa-bath"></i> ' + property.bathroom + ' حمام';

document.getElementById("property-area").innerHTML =
    '<i class="fa-solid fa-ruler-combined"></i> ' + property.area + ' متر مربع'; 

document.querySelectorAll(".slider-btn").forEach(button => {
button.addEventListener("click", function(event){
    event.stopPropagation();
});
});

const mainImage =
document.querySelector(".main-property-image");
document.querySelectorAll(".property-thumbnails img").forEach(img => {
    img.addEventListener("click", function(){
        mainImage.src = this.src
        mainImage.alt = this.alt
    });
});


//requir btn//

const requestButton= 
     document.querySelector(".property-request-btn");
     console.log("دکمه ثبت درخواست", requestButton);

     if(requestButton){
        requestButton.addEventListener("click", function(){
            const title = document.getElementById("property-title").textContent.trim();

            const location = document
            .querySelector(".property-location")
            .textContent.trim();
            const price = document.getElementById("property-price").textContent.trim();

            const propertyCode = "KH-001";

           const message =
    "سلام، دربارهٔ این ملک از سایت کاشانه درخواست معلومات دارم.\n\n" +
    "کد ملک: " + propertyCode + "\n" +
    "نام ملک: " + title + "\n" +
    "موقعیت: " + location + "\n" +
    "قیمت: " + price + "\n\n" +
    "لطفاً دربارهٔ شرایط خرید یا کرایه راهنمایی کنید.";

            const phone = "93788269951";
            const whatsappURL =  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL,"-blank");
        });
     }
}

//wishlist-btn//
document.querySelectorAll(".btn-wishlist").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

       
        const notice = document.getElementById("login-notice");

if (notice) {
    notice.classList.add("show");

    setTimeout(function() {
        notice.classList.remove("show");
    }, 3000);
}
    });
});



