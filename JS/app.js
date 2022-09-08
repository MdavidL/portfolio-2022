const menuBtnProfile = document.querySelector(".profile .profile__btn--menu");
const crossProfileClosed = document.querySelector(".sidebar__profile--cross");
const profileToCareer = document.getElementById("profile-to-career");
const profileToSkills = document.getElementById("profile-to-skills");

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
    
    const arrow_keys_handler = function(e) {
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

profileToCareer.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    profileToCareer.addEventListener('click', location.reload(), false);
})

profileToSkills.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    profileToSkills.addEventListener('click', location.reload(), false);
})

const menuBtnCareer = document.querySelector(".career .career__btn--menu");
const crossCareerClosed = document.querySelector(".sidebar__career--cross");
const careerToProfile = document.getElementById('career-to-profile');
const careerToSkills = document.getElementById('career-to-skills');

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
    
    const arrow_keys_handler = function(e) {
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

careerToProfile.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    careerToProfile.addEventListener('click', location.reload(), false);
})

careerToSkills.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    careerToSkills.addEventListener('click', location.reload(), false);
})


const menuBtnSkills = document.querySelector(".skills .skills__btn--menu");
const crossSkillsClosed = document.querySelector(".sidebar__skills--cross");
const skillsToProfile = document.getElementById("skills-to-profile");
const skillsToCareer = document.getElementById("skills-to-career");

menuBtnSkills.addEventListener('click', () => {
    document.querySelector(".sidebar__skills").style.display = "block";
    document.querySelector(".header h1").style.filter = "blur(5px)";
    document.querySelector(".skills .skills__elements").style.filter = "blur(5px)";
    document.querySelector(".skills h2").style.filter = "blur(5px)";
    document.querySelector(".footer").style.filter = "blur(5px)";
    document.querySelector("body").addEventListener('wheel', preventScroll, {passive: false});
    
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        
        return false;
    }
    
    const arrow_keys_handler = function(e) {
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": 
                case "Space": e.preventDefault(); break;
            default: break;
        }
    };
    window.addEventListener("keydown", arrow_keys_handler, false);
 
})

crossSkillsClosed.addEventListener('click', () => {
    crossSkillsClosed.addEventListener('click', location.reload(), false);
})

skillsToProfile.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    skillsToProfile.addEventListener('click', location.reload(), false);
})

skillsToCareer.addEventListener('click', () => {
    document.querySelector(".header h1").style.filter = "none";
    skillsToCareer.addEventListener('click', location.reload(), false);
})

