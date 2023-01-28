
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
    $('html, body').animate({ scrollTop: 0 }, 'fast');

}

function closeMenu(){
    navLinks.style.right = "-200px";
}

function lockScroll() {
    $('*').addClass("lock-scroll");
}

function unlockScroll() {
    $('*').removeClass("lock-scroll");
}

function my_func(){
    showMenu();
    lockScroll();
}

function my_func2(){
    closeMenu();
    unlockScroll();
}

window.onscroll = function() {myFunction()};

