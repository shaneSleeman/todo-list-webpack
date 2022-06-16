/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "card": () => (/* binding */ card)
/* harmony export */ });
const card = (name, priority, done) => {
    const getName = () => name;
    return{getName};
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./src/card.js");


const project = (name) => {
    let cards = [];

    const getName = () => name;

    const addCard = (todo) => {
        cards.push(todo);
    }

    const removeCard = (todo) => {

    }

    const displayCards = (display) => {
        display.innerHTML = "";
        for(let i = 0; i < cards.length; i++) {
            const todoDisplay = document.createElement("div");
            todoDisplay.innerText = cards[i].getName();
            display.appendChild(todoDisplay);
        }
    }

    return{getName, addCard, removeCard, displayCards};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


let projects = [];
let selected = 0;

function addProject(name) {
    projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name));
}

function removeProject(i) {
    let half1 = projects.slice(0, i);
    let half2 = projects.slice(i + 1, projects.length);
    projects = half1.concat(half2);
}

function displayProjects(display, display2) {
    display.innerHTML = "";
    for(let i = 0; i < projects.length; i++) {
        const projectDisplay = document.createElement("div");
        projectDisplay.classList.toggle('project-line');
        projectDisplay.innerText = projects[i].getName();
        const projectRemove = document.createElement("div");
        projectRemove.innerText = "⨂";
        projectRemove.addEventListener("click", () => {
            removeProject(i);
            displayProjects(display, display2);
        });
        projectDisplay.appendChild(projectRemove);
        projectDisplay.addEventListener("click", () => {
            selected = i;
            projectDisplay.classList.toggle(".selected");
            projects[i].displayCards(display2);
        });
        display.appendChild(projectDisplay);
    }
    if(projects.length < 12) {
        const addProject = document.createElement("div");
        addProject.classList.toggle('project-line');
        addProject.innerText = "Add Project...";
        addProject.addEventListener("click", () => {
            let projectName = prompt("Enter a project name:");
            projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName));
            displayProjects(display, display2);
        })
        display.appendChild(addProject);
    }
}

function getProject(n) {
    return projects[n];
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7O0FBRTdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLE9BQU87Ozs7OztVQzNCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBTztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFPO0FBQ2pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkID0gKG5hbWUsIHByaW9yaXR5LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgcmV0dXJue2dldE5hbWV9O1xufVxuXG5leHBvcnQge2NhcmR9OyIsImltcG9ydCBjYXJkIGZyb20gJy4vY2FyZC5qcyc7XG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjYXJkcyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgICBjb25zdCBhZGRDYXJkID0gKHRvZG8pID0+IHtcbiAgICAgICAgY2FyZHMucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDYXJkID0gKHRvZG8pID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlDYXJkcyA9IChkaXNwbGF5KSA9PiB7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvRGlzcGxheS5pbm5lclRleHQgPSBjYXJkc1tpXS5nZXROYW1lKCk7XG4gICAgICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybntnZXROYW1lLCBhZGRDYXJkLCByZW1vdmVDYXJkLCBkaXNwbGF5Q2FyZHN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcblxubGV0IHByb2plY3RzID0gW107XG5sZXQgc2VsZWN0ZWQgPSAwO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QobmFtZSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGkpIHtcbiAgICBsZXQgaGFsZjEgPSBwcm9qZWN0cy5zbGljZSgwLCBpKTtcbiAgICBsZXQgaGFsZjIgPSBwcm9qZWN0cy5zbGljZShpICsgMSwgcHJvamVjdHMubGVuZ3RoKTtcbiAgICBwcm9qZWN0cyA9IGhhbGYxLmNvbmNhdChoYWxmMik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhkaXNwbGF5LCBkaXNwbGF5Mikge1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qZWN0LWxpbmUnKTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuaW5uZXJUZXh0ID0gcHJvamVjdHNbaV0uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFJlbW92ZS5pbm5lclRleHQgPSBcIuKoglwiO1xuICAgICAgICBwcm9qZWN0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKGRpc3BsYXksIGRpc3BsYXkyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RSZW1vdmUpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBpO1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZShcIi5zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHByb2plY3RzW2ldLmRpc3BsYXlDYXJkcyhkaXNwbGF5Mik7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcbiAgICB9XG4gICAgaWYocHJvamVjdHMubGVuZ3RoIDwgMTIpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdC1saW5lJyk7XG4gICAgICAgIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdC4uLlwiO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJFbnRlciBhIHByb2plY3QgbmFtZTpcIik7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cyhkaXNwbGF5LCBkaXNwbGF5Mik7XG4gICAgICAgIH0pXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG4pIHtcbiAgICByZXR1cm4gcHJvamVjdHNbbl07XG59XG5cbmV4cG9ydCB7YWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZGlzcGxheVByb2plY3RzLCBnZXRQcm9qZWN0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=