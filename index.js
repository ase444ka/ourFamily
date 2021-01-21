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

/***/ "./src/fonts/firaSans/firaSans.css":
/*!*****************************************!*\
  !*** ./src/fonts/firaSans/firaSans.css ***!
  \*****************************************/
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

Array.from(document.querySelectorAll('.personCard__article-body')).map(paragraph => {
    let txt = paragraph.innerHTML;
    let regexp = /!!(.+?)(!!)/g;
    
    txt = txt.replace(regexp, (match, text) => `<strong>${text}</strong>`);
    paragraph.innerHTML = txt; 
})
let card = document.querySelector('.personCard');




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
	"./firaSans/firaSans.css": "./src/fonts/firaSans/firaSans.css",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLnNjc3M/NWU2NCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9wZXJzb25DYXJkL3BlcnNvbkNhcmQuc2Nzcz9jMzE1Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL3NsaWRlci9zbGlkZXIuc2Nzcz9hYmU5Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvZm9udHMvYWxlZ3JleWFTYW5zL2FsZWdyZXlhU2Fucy5jc3M/NmQ3MiIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2ZvbnRzL2ZpcmFTYW5zL2ZpcmFTYW5zLmNzcz8zNWUwIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvZm9udHMvbWF0ZXJpYWxJY29ucy9tYXRlcmlhaUljb25zLmNzcz8yNWVhIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvc3R5bGUuY3NzPzU0YzQiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3MvcGVyc29uQ2FyZC9wZXJzb25DYXJkLmpzIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3N8c3luY3wvLmpzJCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrc3xzeW5jfC8ucyIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvZm9udHN8c3luY3wvLmNzcyQiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL291ci1mYW1pbHkvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELEtBQUs7QUFDL0QsOEI7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0YsdUJBQXVCLDhCQUE4QjtBQUNyRCx5QkFBeUIsOEJBQThCO0FBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUQ7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHlEQUF3QyxFO0FBQzlCO0FBQ3JCLFdBQVcsNERBQTJDLEU7QUFDdEQsV0FBVyx5REFBd0MsRTs7Ozs7Ozs7Ozs7OztBQ1BuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUQ7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcnNvbkNhcmRfX2FydGljbGUtYm9keScpKS5tYXAocGFyYWdyYXBoID0+IHtcclxuICAgIGxldCB0eHQgPSBwYXJhZ3JhcGguaW5uZXJIVE1MO1xyXG4gICAgbGV0IHJlZ2V4cCA9IC8hISguKz8pKCEhKS9nO1xyXG4gICAgXHJcbiAgICB0eHQgPSB0eHQucmVwbGFjZShyZWdleHAsIChtYXRjaCwgdGV4dCkgPT4gYDxzdHJvbmc+JHt0ZXh0fTwvc3Ryb25nPmApO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IHR4dDsgXHJcbn0pXHJcbmxldCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbkNhcmQnKTtcclxuXHJcblxyXG4iLCJcclxubGV0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fc2xpZGVfYWN0aXZlJyk7XHJcbmxldCBzbGlkZVNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zbGlkZXNob3cnKTtcclxubGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3NsaWRlJylcclxubGV0IGNvbXB1dGVkTWFyZ2luO1xyXG5mdW5jdGlvbiBjYWxjTWFyZ2luKCkge1xyXG4gICAgbGV0IHJlY3QxLCByZWN0MjtcclxuICAgIGlmIChhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHJlY3QxID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJlY3QyID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nICYmIGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICByZWN0MiA9IGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmVjdDEgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9IGVsc2UgcmV0dXJuIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fc2xpZGUnKSkubWFyZ2luUmlnaHQpXHJcbiAgICBcclxuICAgIHJldHVybiByZWN0Mi5sZWZ0IC0gcmVjdDEucmlnaHQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja1NpYmxpbmdzKCkge1xyXG4gICAgaWYgKCFhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICBzbGlkZVNob3cuYXBwZW5kKHNsaWRlU2hvdy5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICBzbGlkZVNob3cucHJlcGVuZChzbGlkZVNob3cubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tQcmV2KCkge1xyXG4gICAgaWYgKGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgIWFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHNsaWRlU2hvdy5wcmVwZW5kKHNsaWRlU2hvdy5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgICAgICBzbGlkZVNob3cuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgICAgICBzbGlkZUNhbGMoKTtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgIWFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICBzbGlkZVNob3cuYXBwZW5kKHNsaWRlU2hvdy5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgc2xpZGVTaG93LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVDYWxjKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsaWRlQ2FsYygpIHtcclxuXHJcbiAgICBjaGVja1NpYmxpbmdzKCk7XHJcblxyXG4gICAgbGV0IHByZXZpb3VzU2libGluZ3MgPSAwLCBzbGlkZSA9IGFjdGl2ZVNsaWRlO1xyXG5cclxuICAgIHdoaWxlIChzbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgcHJldmlvdXNTaWJsaW5ncysrO1xyXG4gICAgICAgIHNsaWRlID0gc2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2xpZGVXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NsaWRlOm5vdCguc2xpZGVyX19zbGlkZV9hY3RpdmUpJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgIC8vIGxldCBjb21wdXRlZFdpZHRoID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zbGlkZScpKS5tYXJnaW5SaWdodCkgKyBzbGlkZVdpZHRoO1xyXG4gICAgbGV0IGNvbXB1dGVkV2lkdGggPSBjb21wdXRlZE1hcmdpbiArIHNsaWRlV2lkdGg7XHJcbiAgICBzbGlkZVNob3cuc3R5bGUubWFyZ2luTGVmdCA9IChjb21wdXRlZFdpZHRoICogcHJldmlvdXNTaWJsaW5ncyAqICgtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gc2xpZGVXaWR0aCkgLyAyKSkgKyAncHgnO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsaWRlQ2hhbmdlKGRpcikge1xyXG4gICAgc2xpZGVTaG93LnN0eWxlLnRyYW5zaXRpb24gPSAnbWFyZ2luIDAuNXMgZWFzZS1vdXQnO1xyXG4gICAgY2hlY2tTaWJsaW5ncygpO1xyXG4gICAgbGV0IHRhcmdldFNsaWRlID0gZGlyID09ICdsZWZ0JyA/IGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZyA6IGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICB0YXJnZXRTbGlkZS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3NsaWRlX2FjdGl2ZScpO1xyXG4gICAgYWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19zbGlkZV9hY3RpdmUnKTtcclxuICAgIGFjdGl2ZVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICBzbGlkZUNhbGMoKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVNsaWRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcbn1cclxuIGxldCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19hcnJvd19sZWZ0Jyk7XHJcbiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2Fycm93JykpIHJldHVybjtcclxuICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19hcnJvd19sZWZ0JykpIHNsaWRlQ2hhbmdlKCdyaWdodCcpO1xyXG4gICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2Fycm93X3JpZ2h0JykpIHNsaWRlQ2hhbmdlKCdsZWZ0Jyk7XHJcbiB9KVxyXG4gXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge2NvbXB1dGVkTWFyZ2luID0gY2FsY01hcmdpbigpOyBzbGlkZUNhbGMoKX07XHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtjb21wdXRlZE1hcmdpbiA9IGNhbGNNYXJnaW4oKTsgc2xpZGVDYWxjKCl9O1xyXG5zbGlkZVNob3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoZWNrUHJldik7XHJcblxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL3BlcnNvbkNhcmQvcGVyc29uQ2FyZC5qc1wiOiBcIi4vc3JjL2Jsb2Nrcy9wZXJzb25DYXJkL3BlcnNvbkNhcmQuanNcIixcblx0XCIuL3NsaWRlci9zbGlkZXIuanNcIjogXCIuL3NyYy9ibG9ja3Mvc2xpZGVyL3NsaWRlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9ibG9ja3Mgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaGVhZGVyL2hlYWRlci5zY3NzXCI6IFwiLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuc2Nzc1wiLFxuXHRcIi4vcGVyc29uQ2FyZC9wZXJzb25DYXJkLnNjc3NcIjogXCIuL3NyYy9ibG9ja3MvcGVyc29uQ2FyZC9wZXJzb25DYXJkLnNjc3NcIixcblx0XCIuL3NsaWRlci9zbGlkZXIuc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9zbGlkZXIvc2xpZGVyLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYmxvY2tzIHN5bmMgcmVjdXJzaXZlIFxcXFwucz9jc3MkXCI7IiwiZnVuY3Rpb24gcmVxdWlyZUFsbChyZXF1aXJlQ29udGV4dCkge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVDb250ZXh0LmtleXMoKS5tYXAocmVxdWlyZUNvbnRleHQpO1xyXG59XHJcblxyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnRm9udHMnLCB0cnVlLCAvXFwuY3NzJC8pKTsgXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnQmxvY2tzJywgdHJ1ZSwgL1xcLnM/Y3NzJC8pKTsgXHJcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdCbG9ja3MnLCB0cnVlLCAvXFwuanMkLykpOyAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxlZ3JleWFTYW5zL2FsZWdyZXlhU2Fucy5jc3NcIjogXCIuL3NyYy9mb250cy9hbGVncmV5YVNhbnMvYWxlZ3JleWFTYW5zLmNzc1wiLFxuXHRcIi4vZmlyYVNhbnMvZmlyYVNhbnMuY3NzXCI6IFwiLi9zcmMvZm9udHMvZmlyYVNhbnMvZmlyYVNhbnMuY3NzXCIsXG5cdFwiLi9tYXRlcmlhbEljb25zL21hdGVyaWFpSWNvbnMuY3NzXCI6IFwiLi9zcmMvZm9udHMvbWF0ZXJpYWxJY29ucy9tYXRlcmlhaUljb25zLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9mb250cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmNzcyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9lbnRyeS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=