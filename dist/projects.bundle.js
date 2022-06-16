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
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const card = (name, done) => {
  const getName = () => name;
  const getDone = () => done;
  const changeDone = () => {
    done = !done;
  };
  return {
    getName, getDone, changeDone,
  };
};




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
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */


const project = (name) => {
  let cards = [];

  const getName = () => name;

  const addCard = (todo) => {
    cards.push(todo);
  };

  function removeCard(i) {
    const half1 = cards.slice(0, i);
    const half2 = cards.slice(i + 1, cards.length);
    cards = half1.concat(half2);
  }

  const displayCards = (display) => {
    display.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
      const todoDisplay = document.createElement('div');
      const todoText = document.createElement('div');
      todoText.innerText = cards[i].getName();
      const todoDelete = document.createElement('div');
      todoDelete.innerText = '⨂';
      todoDelete.addEventListener('click', () => {
        removeCard(i);
        displayCards(display);
      });
      const todoDone = document.createElement('div');
      if (cards[i].getDone()) {
        todoDone.innerText = '✓';
      } else {
        todoDone.innerText = '○';
      }
      todoDone.style['font-size'] = '2rem';
      todoDisplay.addEventListener('click', () => {
        cards[i].changeDone();
        displayCards(display);
      });
      todoDisplay.appendChild(todoDelete);
      todoDisplay.appendChild(todoText);
      todoDisplay.appendChild(todoDone);
      todoDisplay.classList.toggle('project-line');
      todoDisplay.classList.toggle('todo-line');
      display.appendChild(todoDisplay);
    }

    if (cards.length < 12) {
      // eslint-disable-next-line no-shadow
      const addCards = document.createElement('div');
      addCards.classList.toggle('project-line');
      addCards.classList.toggle('todo-line');
      addCards.innerText = 'Add Todo Item...';
      // eslint-disable-next-line no-loop-func
      addCards.addEventListener('click', () => {
        let cardName = prompt('Enter a task:');
        if (cardName.length > 30) {
          cardName = cardName.substring(0, 30);
        }
        const addedCard = (0,_card_js__WEBPACK_IMPORTED_MODULE_0__.card)(cardName, false);
        cards.push(addedCard);
        // eslint-disable-next-line no-undef
        displayCards(display);
      });
      display.appendChild(addCards);
    }
  };

  return {
    getName, addCard, removeCard, displayCards,
  };
};

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
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */


let projects = [];
let selected = 0;

function addProject(name) {
  projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name));
}

function removeProject(i) {
  const half1 = projects.slice(0, i);
  const half2 = projects.slice(i + 1, projects.length);
  projects = half1.concat(half2);
}

function displayProjects(display, display2) {
  display.innerHTML = '';
  for (let i = 0; i < projects.length; i++) {
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.toggle('project-line');
    projectDisplay.classList.remove('selected');
    // eslint-disable-next-line eqeqeq
    if (i == selected) {
      projectDisplay.classList.add('selected');
    }
    projectDisplay.innerText = projects[i].getName();
    const projectRemove = document.createElement('div');
    projectRemove.innerText = '⨂';
    projectRemove.addEventListener('click', () => {
      removeProject(i);
      displayProjects(display, display2);
    });
    projectDisplay.appendChild(projectRemove);
    // eslint-disable-next-line no-loop-func
    projectDisplay.addEventListener('click', () => {
      selected = i;
      displayProjects(display, display2);
      projects[i].displayCards(display2);
    });
    display.appendChild(projectDisplay);
  }
  if (projects.length < 12) {
    // eslint-disable-next-line no-shadow
    const addProject = document.createElement('div');
    addProject.classList.toggle('project-line');
    addProject.innerText = 'Add Project...';
    addProject.addEventListener('click', () => {
      let projectName = prompt('Enter a project name:');
      if (projectName.length > 18) {
        projectName = projectName.substring(0, 18);
      }
      projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName));
      displayProjects(display, display2);
    });
    display.appendChild(addProject);
  }
}

function getProject(n) {
  return projects[n];
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7OztVQy9FdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix1REFBTztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQU87QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgY2FyZCA9IChuYW1lLCBkb25lKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgY29uc3QgY2hhbmdlRG9uZSA9ICgpID0+IHtcbiAgICBkb25lID0gIWRvbmU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSwgZ2V0RG9uZSwgY2hhbmdlRG9uZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGNhcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNhcmQgfSBmcm9tICcuL2NhcmQuanMnO1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgbGV0IGNhcmRzID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3QgYWRkQ2FyZCA9ICh0b2RvKSA9PiB7XG4gICAgY2FyZHMucHVzaCh0b2RvKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVDYXJkKGkpIHtcbiAgICBjb25zdCBoYWxmMSA9IGNhcmRzLnNsaWNlKDAsIGkpO1xuICAgIGNvbnN0IGhhbGYyID0gY2FyZHMuc2xpY2UoaSArIDEsIGNhcmRzLmxlbmd0aCk7XG4gICAgY2FyZHMgPSBoYWxmMS5jb25jYXQoaGFsZjIpO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheUNhcmRzID0gKGRpc3BsYXkpID0+IHtcbiAgICBkaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0b2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb1RleHQuaW5uZXJUZXh0ID0gY2FyZHNbaV0uZ2V0TmFtZSgpO1xuICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb0RlbGV0ZS5pbm5lclRleHQgPSAn4qiCJztcbiAgICAgIHRvZG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNhcmQoaSk7XG4gICAgICAgIGRpc3BsYXlDYXJkcyhkaXNwbGF5KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9kb0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGlmIChjYXJkc1tpXS5nZXREb25lKCkpIHtcbiAgICAgICAgdG9kb0RvbmUuaW5uZXJUZXh0ID0gJ+Kckyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvRG9uZS5pbm5lclRleHQgPSAn4peLJztcbiAgICAgIH1cbiAgICAgIHRvZG9Eb25lLnN0eWxlWydmb250LXNpemUnXSA9ICcycmVtJztcbiAgICAgIHRvZG9EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYXJkc1tpXS5jaGFuZ2VEb25lKCk7XG4gICAgICAgIGRpc3BsYXlDYXJkcyhkaXNwbGF5KTtcbiAgICAgIH0pO1xuICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZSk7XG4gICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvVGV4dCk7XG4gICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvRG9uZSk7XG4gICAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qZWN0LWxpbmUnKTtcbiAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8tbGluZScpO1xuICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7XG4gICAgfVxuXG4gICAgaWYgKGNhcmRzLmxlbmd0aCA8IDEyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBjb25zdCBhZGRDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkQ2FyZHMuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdC1saW5lJyk7XG4gICAgICBhZGRDYXJkcy5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWxpbmUnKTtcbiAgICAgIGFkZENhcmRzLmlubmVyVGV4dCA9ICdBZGQgVG9kbyBJdGVtLi4uJztcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIGFkZENhcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgY2FyZE5hbWUgPSBwcm9tcHQoJ0VudGVyIGEgdGFzazonKTtcbiAgICAgICAgaWYgKGNhcmROYW1lLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgY2FyZE5hbWUgPSBjYXJkTmFtZS5zdWJzdHJpbmcoMCwgMzApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkZGVkQ2FyZCA9IGNhcmQoY2FyZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgY2FyZHMucHVzaChhZGRlZENhcmQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgZGlzcGxheUNhcmRzKGRpc3BsYXkpO1xuICAgICAgfSk7XG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGFkZENhcmRzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLCBhZGRDYXJkLCByZW1vdmVDYXJkLCBkaXNwbGF5Q2FyZHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBzZWxlY3RlZCA9IDA7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QobmFtZSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGkpIHtcbiAgY29uc3QgaGFsZjEgPSBwcm9qZWN0cy5zbGljZSgwLCBpKTtcbiAgY29uc3QgaGFsZjIgPSBwcm9qZWN0cy5zbGljZShpICsgMSwgcHJvamVjdHMubGVuZ3RoKTtcbiAgcHJvamVjdHMgPSBoYWxmMS5jb25jYXQoaGFsZjIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoZGlzcGxheSwgZGlzcGxheTIpIHtcbiAgZGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZSgncHJvamVjdC1saW5lJyk7XG4gICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgaWYgKGkgPT0gc2VsZWN0ZWQpIHtcbiAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIHByb2plY3REaXNwbGF5LmlubmVyVGV4dCA9IHByb2plY3RzW2ldLmdldE5hbWUoKTtcbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFJlbW92ZS5pbm5lclRleHQgPSAn4qiCJztcbiAgICBwcm9qZWN0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlUHJvamVjdChpKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhkaXNwbGF5LCBkaXNwbGF5Mik7XG4gICAgfSk7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgIHByb2plY3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQgPSBpO1xuICAgICAgZGlzcGxheVByb2plY3RzKGRpc3BsYXksIGRpc3BsYXkyKTtcbiAgICAgIHByb2plY3RzW2ldLmRpc3BsYXlDYXJkcyhkaXNwbGF5Mik7XG4gICAgfSk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG4gIH1cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3QtbGluZScpO1xuICAgIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0Li4uJztcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvbXB0KCdFbnRlciBhIHByb2plY3QgbmFtZTonKTtcbiAgICAgIGlmIChwcm9qZWN0TmFtZS5sZW5ndGggPiAxOCkge1xuICAgICAgICBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lLnN1YnN0cmluZygwLCAxOCk7XG4gICAgICB9XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0cyhkaXNwbGF5LCBkaXNwbGF5Mik7XG4gICAgfSk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG4pIHtcbiAgcmV0dXJuIHByb2plY3RzW25dO1xufVxuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBkaXNwbGF5UHJvamVjdHMsIGdldFByb2plY3QsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9