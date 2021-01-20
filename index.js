/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/header/header.scss":
/*!***************************************!*\
  !*** ./src/blocks/header/header.scss ***!
  \***************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/personCard/personCard.scss":
/*!***********************************************!*\
  !*** ./src/blocks/personCard/personCard.scss ***!
  \***********************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/slider/slider.scss":
/*!***************************************!*\
  !*** ./src/blocks/slider/slider.scss ***!
  \***************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/alegreyaSans/alegreyaSans.css":
/*!*************************************************!*\
  !*** ./src/fonts/alegreyaSans/alegreyaSans.css ***!
  \*************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/materialIcons/materiaiIcons.css":
/*!***************************************************!*\
  !*** ./src/fonts/materialIcons/materiaiIcons.css ***!
  \***************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/personCard/personCard.js":
/*!*********************************************!*\
  !*** ./src/blocks/personCard/personCard.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

Array.from(document.querySelectorAll('.personCard_article-body')).map(paragraph => {
    let txt = paragraph.innerHTML;
    let regexp = /!!(.+?)(!!)/g;
    
    txt = txt.replace(regexp, (match, text) => `<strong>${text}</strong>`);
    paragraph.innerHTML = txt; 
})



/***/ }),

/***/ "./src/blocks/slider/slider.js":
/*!*************************************!*\
  !*** ./src/blocks/slider/slider.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {


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




/***/ }),

/***/ "./src/blocks sync recursive \\.js$":
/*!********************************!*\
  !*** ./src/blocks/ sync \.js$ ***!
  \********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./personCard/personCard.js": "./src/blocks/personCard/personCard.js",
	"./slider/slider.js": "./src/blocks/slider/slider.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/blocks sync recursive \\.js$";

/***/ }),

/***/ "./src/blocks sync recursive \\.s?css$":
/*!***********************************!*\
  !*** ./src/blocks/ sync \.s?css$ ***!
  \***********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./header/header.scss": "./src/blocks/header/header.scss",
	"./personCard/personCard.scss": "./src/blocks/personCard/personCard.scss",
	"./slider/slider.scss": "./src/blocks/slider/slider.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/blocks sync recursive \\.s?css$";

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./src/fonts sync recursive \\.css$")); 

requireAll(__webpack_require__("./src/blocks sync recursive \\.s?css$")); 
requireAll(__webpack_require__("./src/blocks sync recursive \\.js$")); 

/***/ }),

/***/ "./src/fonts sync recursive \\.css$":
/*!********************************!*\
  !*** ./src/fonts/ sync \.css$ ***!
  \********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./alegreyaSans/alegreyaSans.css": "./src/fonts/alegreyaSans/alegreyaSans.css",
	"./materialIcons/materiaiIcons.css": "./src/fonts/materialIcons/materiaiIcons.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/fonts sync recursive \\.css$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/entry.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLnNjc3M/NWU2NCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9wZXJzb25DYXJkL3BlcnNvbkNhcmQuc2Nzcz9jMzE1Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL3NsaWRlci9zbGlkZXIuc2Nzcz9hYmU5Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvZm9udHMvYWxlZ3JleWFTYW5zL2FsZWdyZXlhU2Fucy5jc3M/NmQ3MiIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2ZvbnRzL21hdGVyaWFsSWNvbnMvbWF0ZXJpYWlJY29ucy5jc3M/MjVlYSIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL3N0eWxlLmNzcz81NGM0Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL3BlcnNvbkNhcmQvcGVyc29uQ2FyZC5qcyIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzfHN5bmN8Ly5qcyQiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3N8c3luY3wvLnMiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2ZvbnRzfHN5bmN8Ly5jc3MkIiwid2VicGFjazovL291ci1mYW1pbHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL291ci1mYW1pbHkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsS0FBSztBQUMvRCw4QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRix1QkFBdUIsOEJBQThCO0FBQ3JELHlCQUF5Qiw4QkFBOEI7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RDs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBOztBQUVBLFdBQVcseURBQXdDLEU7QUFDOUI7QUFDckIsV0FBVyw0REFBMkMsRTtBQUN0RCxXQUFXLHlEQUF3QyxFOzs7Ozs7Ozs7Ozs7O0FDUG5EO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUQ7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcnNvbkNhcmRfYXJ0aWNsZS1ib2R5JykpLm1hcChwYXJhZ3JhcGggPT4ge1xyXG4gICAgbGV0IHR4dCA9IHBhcmFncmFwaC5pbm5lckhUTUw7XHJcbiAgICBsZXQgcmVnZXhwID0gLyEhKC4rPykoISEpL2c7XHJcbiAgICBcclxuICAgIHR4dCA9IHR4dC5yZXBsYWNlKHJlZ2V4cCwgKG1hdGNoLCB0ZXh0KSA9PiBgPHN0cm9uZz4ke3RleHR9PC9zdHJvbmc+YCk7XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gdHh0OyBcclxufSlcclxuXHJcbiIsIlxyXG5sZXQgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zbGlkZV9hY3RpdmUnKTtcclxubGV0IHNsaWRlU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NsaWRlc2hvdycpO1xyXG5sZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fc2xpZGUnKVxyXG5sZXQgY29tcHV0ZWRNYXJnaW47XHJcbmZ1bmN0aW9uIGNhbGNNYXJnaW4oKSB7XHJcbiAgICBsZXQgcmVjdDEsIHJlY3QyO1xyXG4gICAgaWYgKGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZyAmJiBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgcmVjdDEgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmVjdDIgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSBlbHNlIGlmIChhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHJlY3QyID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZWN0MSA9IGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH0gZWxzZSByZXR1cm4gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zbGlkZScpKS5tYXJnaW5SaWdodClcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlY3QyLmxlZnQgLSByZWN0MS5yaWdodDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU2libGluZ3MoKSB7XHJcbiAgICBpZiAoIWFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHNsaWRlU2hvdy5hcHBlbmQoc2xpZGVTaG93LmZpcnN0RWxlbWVudENoaWxkKTtcclxuICAgIH1cclxuICAgIGlmICghYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHNsaWRlU2hvdy5wcmVwZW5kKHNsaWRlU2hvdy5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGVja1ByZXYoKSB7XHJcbiAgICBpZiAoYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAhYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgc2xpZGVTaG93LnByZXBlbmQoc2xpZGVTaG93Lmxhc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICAgIHNsaWRlU2hvdy5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlQ2FsYygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZyAmJiAhYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHNsaWRlU2hvdy5hcHBlbmQoc2xpZGVTaG93LmZpcnN0RWxlbWVudENoaWxkKTtcclxuICAgICAgICBzbGlkZVNob3cuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgICAgICBzbGlkZUNhbGMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVDYWxjKCkge1xyXG5cclxuICAgIGNoZWNrU2libGluZ3MoKTtcclxuXHJcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5ncyA9IDAsIHNsaWRlID0gYWN0aXZlU2xpZGU7XHJcblxyXG4gICAgd2hpbGUgKHNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICBwcmV2aW91c1NpYmxpbmdzKys7XHJcbiAgICAgICAgc2xpZGUgPSBzbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzbGlkZVdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fc2xpZGU6bm90KC5zbGlkZXJfX3NsaWRlX2FjdGl2ZSknKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgLy8gbGV0IGNvbXB1dGVkV2lkdGggPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NsaWRlJykpLm1hcmdpblJpZ2h0KSArIHNsaWRlV2lkdGg7XHJcbiAgICBsZXQgY29tcHV0ZWRXaWR0aCA9IGNvbXB1dGVkTWFyZ2luICsgc2xpZGVXaWR0aDtcclxuICAgIHNsaWRlU2hvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gKGNvbXB1dGVkV2lkdGggKiBwcmV2aW91c1NpYmxpbmdzICogKC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBzbGlkZVdpZHRoKSAvIDIpKSArICdweCc7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVDaGFuZ2UoZGlyKSB7XHJcbiAgICBzbGlkZVNob3cuc3R5bGUudHJhbnNpdGlvbiA9ICdtYXJnaW4gMC41cyBlYXNlLW91dCc7XHJcbiAgICBjaGVja1NpYmxpbmdzKCk7XHJcbiAgICBsZXQgdGFyZ2V0U2xpZGUgPSBkaXIgPT0gJ2xlZnQnID8gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nIDogYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIHRhcmdldFNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fc2xpZGVfYWN0aXZlJyk7XHJcbiAgICBhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3NsaWRlX2FjdGl2ZScpO1xyXG4gICAgYWN0aXZlU2xpZGUgPSB0YXJnZXRTbGlkZTtcclxuICAgIHNsaWRlQ2FsYygpO1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZlU2xpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxufVxyXG4gbGV0IGFycm93TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2Fycm93X2xlZnQnKTtcclxuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fYXJyb3cnKSkgcmV0dXJuO1xyXG4gICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2Fycm93X2xlZnQnKSkgc2xpZGVDaGFuZ2UoJ3JpZ2h0Jyk7XHJcbiAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fYXJyb3dfcmlnaHQnKSkgc2xpZGVDaGFuZ2UoJ2xlZnQnKTtcclxuIH0pXHJcbiBcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7Y29tcHV0ZWRNYXJnaW4gPSBjYWxjTWFyZ2luKCk7IHNsaWRlQ2FsYygpfTtcclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge2NvbXB1dGVkTWFyZ2luID0gY2FsY01hcmdpbigpOyBzbGlkZUNhbGMoKX07XHJcbnNsaWRlU2hvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2hlY2tQcmV2KTtcclxuXHJcblxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vcGVyc29uQ2FyZC9wZXJzb25DYXJkLmpzXCI6IFwiLi9zcmMvYmxvY2tzL3BlcnNvbkNhcmQvcGVyc29uQ2FyZC5qc1wiLFxuXHRcIi4vc2xpZGVyL3NsaWRlci5qc1wiOiBcIi4vc3JjL2Jsb2Nrcy9zbGlkZXIvc2xpZGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Jsb2NrcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9oZWFkZXIvaGVhZGVyLnNjc3NcIjogXCIuL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzXCIsXG5cdFwiLi9wZXJzb25DYXJkL3BlcnNvbkNhcmQuc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9wZXJzb25DYXJkL3BlcnNvbkNhcmQuc2Nzc1wiLFxuXHRcIi4vc2xpZGVyL3NsaWRlci5zY3NzXCI6IFwiLi9zcmMvYmxvY2tzL3NsaWRlci9zbGlkZXIuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9ibG9ja3Mgc3luYyByZWN1cnNpdmUgXFxcXC5zP2NzcyRcIjsiLCJmdW5jdGlvbiByZXF1aXJlQWxsKHJlcXVpcmVDb250ZXh0KSB7XHJcbiAgICByZXR1cm4gcmVxdWlyZUNvbnRleHQua2V5cygpLm1hcChyZXF1aXJlQ29udGV4dCk7XHJcbn1cclxuXHJcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdGb250cycsIHRydWUsIC9cXC5jc3MkLykpOyBcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdCbG9ja3MnLCB0cnVlLCAvXFwucz9jc3MkLykpOyBcclxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJ0Jsb2NrcycsIHRydWUsIC9cXC5qcyQvKSk7ICIsInZhciBtYXAgPSB7XG5cdFwiLi9hbGVncmV5YVNhbnMvYWxlZ3JleWFTYW5zLmNzc1wiOiBcIi4vc3JjL2ZvbnRzL2FsZWdyZXlhU2Fucy9hbGVncmV5YVNhbnMuY3NzXCIsXG5cdFwiLi9tYXRlcmlhbEljb25zL21hdGVyaWFpSWNvbnMuY3NzXCI6IFwiLi9zcmMvZm9udHMvbWF0ZXJpYWxJY29ucy9tYXRlcmlhaUljb25zLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9mb250cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmNzcyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9lbnRyeS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=