
let activeSlide = document.querySelector('.slider__slide_active');
let slideShow = document.querySelector('.slider__slideshow');
let slides = document.querySelectorAll('.slider__slide')
let computedMargin;
function calcMargin() {
    let rect1, rect2;
    if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.nextElementSibling) {
        rect1 = activeSlide.nextElementSibling.getBoundingClientRect();
        rect2 = activeSlide.nextElementSibling.nextElementSibling.getBoundingClientRect();
    } else if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.nextElementSibling) {
        rect2 = activeSlide.previousElementSibling.getBoundingClientRect();
        rect1 = activeSlide.previousElementSibling.previousElementSibling.getBoundingClientRect();
    } else return parseInt(getComputedStyle(document.querySelector('.slider__slide')).marginRight)
    
    return rect2.left - rect1.right;
}


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

    let slideWidth = document.querySelector('.slider__slide:not(.slider__slide_active)').getBoundingClientRect().width;
   // let computedWidth = parseInt(getComputedStyle(document.querySelector('.slider__slide')).marginRight) + slideWidth;
    let computedWidth = computedMargin + slideWidth;
    slideShow.style.marginLeft = (computedWidth * previousSiblings * (-1)
                                + ((document.documentElement.clientWidth - slideWidth) / 2)) + 'px';
    
}

function slideChange(dir) {
    slideShow.style.transition = 'margin 0.5s ease-out';
    checkSiblings();
    let targetSlide = dir == 'left' ? activeSlide.nextElementSibling : activeSlide.previousElementSibling;
    targetSlide.classList.add('slider__slide_active');
    activeSlide.classList.remove('slider__slide_active');
    activeSlide = targetSlide;
    slideCalc();
    console.log(activeSlide.getBoundingClientRect());
    console.log(document.documentElement.getBoundingClientRect());
}
 let arrowLeft = document.querySelector('.slider__arrow_left');
 document.addEventListener('click', function(event) {
     if (!event.target.classList.contains('slider__arrow')) return;
     if (event.target.classList.contains('slider__arrow_left')) slideChange('right');
     if (event.target.classList.contains('slider__arrow_right')) slideChange('left');
 })
 

window.onload = () => {computedMargin = calcMargin(); slideCalc()};
window.onresize = () => {computedMargin = calcMargin(); slideCalc()};
slideShow.addEventListener('transitionend', checkPrev);


