const navSlide = function(){
    const burger = document.querySelector(".burger");
    const navList= document.querySelector(".navList");
    const navLinks = document.querySelectorAll('.navList li');

    burger.addEventListener("click", function(){
        navList.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            link.style.animation = 'navListFade 0.5s ease forwards $(index / 7 + 3}s';
        });

        // burger animation
        burger.classList.toggle("toggle");
    });

}



navSlide();

var whatsapp_number = 2348060379552;
function myWhatsappFunction() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      // mobile link
      document.getElementById("whatsapp-btn").href = "https://wa.me/" + whatsapp_number;
    } else {
      // desktop link
      document.getElementById("whatsapp-btn").href = "https://web.whatsapp.com/send?phone=" + whatsapp_number;
    }
};

myWhatsappFunction();
