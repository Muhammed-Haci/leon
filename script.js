// ------ Open and close the nav menu Function ------
let icon = document.querySelector('.icon');
let ul = document.querySelector('.nav-links');
// let line1 = document.querySelector('.line1');
// let line2 = document.querySelector('.line2');
// let line3 = document.querySelector('.line3');
let open = false;

icon.addEventListener("click", function(){
    if (open === true) {
        ul.style.display = "none";
        open = false;
    } else {
        ul.style.display = "flex";
        // line1.style.transform = translateY("8px"), rotate ("45deg");
        // line1.style.opacity = 0;
        // line1.style.transform = translateY("-8px"), rotate ("-45deg");
        open = true;
    }
});


// ------------- scroll to the to Function ----------
let scrollUp = document.querySelector('.scroll-up');

window.onscroll = function () {
    if (window.scrollY >= 600 ) {
        scrollUp.style.display = "block";
    }else {
        scrollUp.style.display = "none";
    }
};

scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
};
