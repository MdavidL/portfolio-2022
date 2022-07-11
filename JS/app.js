const menuBtnProfile = document.querySelector(".profile .profile__btn--menu");
const crossProfileClosed = document.querySelector(".sidebar__profile--cross");

menuBtnProfile.addEventListener('click', () => {
    document.querySelector(".sidebar__profile").style.display = "block";
    document.querySelector(".header h1").style.filter = "blur(5px)";
    document.querySelector(".profile .profile__elements").style.filter = "blur(5px)";
    document.querySelector(".footer").style.filter = "blur(5px)";
    document.querySelector("body").addEventListener('wheel', preventScroll, {passive: false});
    
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        
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
// A chaque fois que l'on clique sur la croix
//ferme la sidebar, débloque le scroll et enlève le flou.
crossProfileClosed.addEventListener('click', () => {
    document.querySelector(".sidebar__profile").style.display = "none";
    document.querySelector(".sidebar__career").style.display = "none";
    document.querySelector(".header h1").style.filter = "none";
    document.querySelector(".profile .profile__elements").style.filter = "none";
    document.querySelector(".footer").style.filter = "none";
    document.querySelector("body").addEventListener('wheel', preventCancelableEvents, true);


    function preventCancelableEvents(e) {
        e.preventDefault();
        e.stopPropagation();
    
        return true;
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







const menuBtnCareer = document.querySelector(".career .career__btn--menu");
const crossCareerClosed = document.querySelector(".sidebar__career--cross");



menuBtnCareer.addEventListener('click', () => {
    document.querySelector(".sidebar__career").style.display = "block";
 
})

crossCareerClosed.addEventListener('click', () => {
    document.querySelector(".sidebar__career").style.display = "none";
})

