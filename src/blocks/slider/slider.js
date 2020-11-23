
let activeSlide = document.querySelector('.slider__slide_active');
let slideShow = document.querySelector('.slider__slideshow');
let slides = document.querySelectorAll('.slider__slide')


function checkSiblings() {
    if (!activeSlide.nextElementSibling) {
        slideShow.append(slideShow.firstElementChild);
    }
    if (!activeSlide.previousElementSibling) {
        slideShow.prepend(slideShow.lastElementChild);
    }
}
function checkPrev() {
    if (activeSlide.previousElementSibling && !activeSlide.previousElementSibling.previousElementSibling) {
        slideShow.prepend(slideShow.lastElementChild);
        slideShow.style.transition = 'none';
        slideCalc();
    }
    if (activeSlide.nextElementSibling && !activeSlide.nextElementSibling.nextElementSibling) {
        slideShow.append(slideShow.firstElementChild);
        slideShow.style.transition = 'none';
        slideCalc();
    }
}

function slideCalc() {

    checkSiblings();

    let previousSiblings = 0, slide = activeSlide;

    while (slide.previousElementSibling) {
        previousSiblings++;
        slide = slide.previousElementSibling;
    }

    let computedStyle = getComputedStyle(document.querySelector('.slider__slide'));
    let computedWidth = parseInt(computedStyle.width) + parseInt(computedStyle.marginRight);

    slideShow.style.marginLeft = (computedWidth * previousSiblings * (-1)
                                + 20 * document.documentElement.clientWidth / 100) + 'px';
    //20 - is (100 - 60) / 2 - where 60 is a width of slide in vw - if changing need to change here.
    
}

function slideChange(dir) {
    slideShow.style.transition = 'margin 0.5s ease-out';
    checkSiblings();
    let targetSlide = dir == 'left' ? activeSlide.nextElementSibling : activeSlide.previousElementSibling;
    targetSlide.classList.add('slider__slide_active');
    activeSlide.classList.remove('slider__slide_active');
    activeSlide = targetSlide;
    slideCalc();
}
 let arrowLeft = document.querySelector('.slider__arrow_left');
 document.addEventListener('click', function(event) {
     if (!event.target.classList.contains('slider__arrow')) return;
     if (event.target.classList.contains('slider__arrow_left')) slideChange('right');
     if (event.target.classList.contains('slider__arrow_right')) slideChange('left');
 })
 

window.onload = slideCalc;
window.onresize = slideCalc;
slideShow.addEventListener('transitionend', checkPrev);


