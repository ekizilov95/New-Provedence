
import animscroll from './modules/animscroll';
import slider from './modules/slider';
import  adaptive from'./modules/adaptive';
import preloader from './modules/preloader';
import postForms from './modules/forms';



window.addEventListener('DOMContentLoaded', () => {
    animscroll();
    slider();
    adaptive();
    preloader();
    postForms();
});



