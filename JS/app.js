const menuBtn = document.querySelector(".header .header__elements--navbar-menu");
const crossClosed = document.querySelector(".sidebar__cross");

menuBtn.addEventListener('click', () => {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".header h1").style.filter = "blur(5px)";
    document.querySelector(".profile .profile__elements").style.filter = "blur(5px)";
    document.querySelector(".footer").style.filter = "blur(5px)";
    document.querySelector("body").addEventListener('wheel', preventScroll, {passive: false});
    
    function preventScroll(e) {
        e.preventDefault();
      
        return false;
    }

    document.addEventListener('keydown', preventKeyBoardScroll, false);

    function preventKeyBoardScroll(e) {
    var keys = [32, 33, 34, 35, 37, 38, 39, 40];
    if (keys.includes(e.keyCode)) {
        e.preventDefault();
        return false;
        }
    }

})

crossClosed.addEventListener('click', () => {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".header h1").style.filter = "none";
    document.querySelector(".profile .profile__elements").style.filter = "none";
    document.querySelector(".footer").style.filter = "none";
    document.querySelector("body").addEventListener('wheel', preventCancelableEvents, true);

    function preventCancelableEvents(e) {
        e.stopPropagation();
    }

    document.addEventListener('keydown', preventKeyBoardScroll, true);

    function preventKeyBoardScroll(e) {
    var keys = [32, 33, 34, 35, 37, 38, 39, 40];
    if (keys.includes(e.keyCode)) {
        e.preventDefault();
        return true;
        }
    }
})

