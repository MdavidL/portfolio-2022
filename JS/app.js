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
    
    var arrow_keys_handler = function(e) {
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": 
                case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    };
    window.addEventListener("keydown", arrow_keys_handler, false);
})

crossProfileClosed.addEventListener('click', () => {
    crossProfileClosed.addEventListener('click', location.reload(), false);
})


const menuBtnCareer = document.querySelector(".career .career__btn--menu");
const crossCareerClosed = document.querySelector(".sidebar__career--cross");

menuBtnCareer.addEventListener('click', () => {
    document.querySelector(".sidebar__career").style.display = "block";
    document.querySelector(".header h1").style.filter = "blur(5px)";
    document.querySelector(".career .career__elements").style.filter = "blur(5px)";
    document.querySelector(".career h2").style.filter = "blur(5px)";
    document.querySelector(".footer").style.filter = "blur(5px)";
    document.querySelector("body").addEventListener('wheel', preventScroll, {passive: false});
    
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        
        return false;
    }
    
    var arrow_keys_handler = function(e) {
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": 
                case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    };
    window.addEventListener("keydown", arrow_keys_handler, false);
 })

crossCareerClosed.addEventListener('click', () => {
    crossCareerClosed.addEventListener('click', location.reload(), false);
})


const menuBtnSkills = document.querySelector(".skills .skills__btn--menu");
const crossSkillsClosed = document.querySelector(".sidebar__skills--cross");

menuBtnSkills.addEventListener('click', () => {
    document.querySelector(".sidebar__skills").style.display = "block";
    document.querySelector(".header h1").style.filter = "blur(5px)";
    document.querySelector(".footer").style.filter = "blur(5px)";
})

crossSkillsClosed.addEventListener('click', () => {
    crossSkillsClosed.addEventListener('click', location.reload(), false);
})