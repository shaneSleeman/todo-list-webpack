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
        projectDisplay.classList.remove("selected");
        if(i == selected) {
            projectDisplay.classList.add("selected");
        }
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
            displayProjects(display, display2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINkI7O0FBRTdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLE9BQU87Ozs7OztVQzNCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBTztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQU87QUFDakM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmQgPSAobmFtZSwgcHJpb3JpdHksIGRvbmUpID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICByZXR1cm57Z2V0TmFtZX07XG59XG5cbmV4cG9ydCB7Y2FyZH07IiwiaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkLmpzJztcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNhcmRzID0gW107XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIGNvbnN0IGFkZENhcmQgPSAodG9kbykgPT4ge1xuICAgICAgICBjYXJkcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNhcmQgPSAodG9kbykgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUNhcmRzID0gKGRpc3BsYXkpID0+IHtcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmlubmVyVGV4dCA9IGNhcmRzW2ldLmdldE5hbWUoKTtcbiAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue2dldE5hbWUsIGFkZENhcmQsIHJlbW92ZUNhcmQsIGRpc3BsYXlDYXJkc307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBzZWxlY3RlZCA9IDA7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdChuYW1lKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaSkge1xuICAgIGxldCBoYWxmMSA9IHByb2plY3RzLnNsaWNlKDAsIGkpO1xuICAgIGxldCBoYWxmMiA9IHByb2plY3RzLnNsaWNlKGkgKyAxLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgIHByb2plY3RzID0gaGFsZjEuY29uY2F0KGhhbGYyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKGRpc3BsYXksIGRpc3BsYXkyKSB7XG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3QtbGluZScpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmKGkgPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0RGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0c1tpXS5nZXROYW1lKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0UmVtb3ZlLmlubmVyVGV4dCA9IFwi4qiCXCI7XG4gICAgICAgIHByb2plY3RSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QoaSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoZGlzcGxheSwgZGlzcGxheTIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZSk7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IGk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoZGlzcGxheSwgZGlzcGxheTIpO1xuICAgICAgICAgICAgcHJvamVjdHNbaV0uZGlzcGxheUNhcmRzKGRpc3BsYXkyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuICAgIH1cbiAgICBpZihwcm9qZWN0cy5sZW5ndGggPCAxMikge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qZWN0LWxpbmUnKTtcbiAgICAgICAgYWRkUHJvamVjdC5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0Li4uXCI7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb21wdChcIkVudGVyIGEgcHJvamVjdCBuYW1lOlwiKTtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKGRpc3BsYXksIGRpc3BsYXkyKTtcbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3Qobikge1xuICAgIHJldHVybiBwcm9qZWN0c1tuXTtcbn1cblxuZXhwb3J0IHthZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBkaXNwbGF5UHJvamVjdHMsIGdldFByb2plY3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==