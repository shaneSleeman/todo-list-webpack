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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
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
        setTimeout(() => {
          removeCard(i);
          displayCards(display);
        }, 5);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUNkaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgY2FyZCA9IChuYW1lLCBkb25lKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgY29uc3QgY2hhbmdlRG9uZSA9ICgpID0+IHtcbiAgICBkb25lID0gIWRvbmU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSwgZ2V0RG9uZSwgY2hhbmdlRG9uZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGNhcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgY2FyZCB9IGZyb20gJy4vY2FyZC5qcyc7XG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuICBsZXQgY2FyZHMgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICBjb25zdCBhZGRDYXJkID0gKHRvZG8pID0+IHtcbiAgICBjYXJkcy5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNhcmQoaSkge1xuICAgIGNvbnN0IGhhbGYxID0gY2FyZHMuc2xpY2UoMCwgaSk7XG4gICAgY29uc3QgaGFsZjIgPSBjYXJkcy5zbGljZShpICsgMSwgY2FyZHMubGVuZ3RoKTtcbiAgICBjYXJkcyA9IGhhbGYxLmNvbmNhdChoYWxmMik7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5Q2FyZHMgPSAoZGlzcGxheSkgPT4ge1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHRvZG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvVGV4dC5pbm5lclRleHQgPSBjYXJkc1tpXS5nZXROYW1lKCk7XG4gICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvRGVsZXRlLmlubmVyVGV4dCA9ICfiqIInO1xuICAgICAgdG9kb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlQ2FyZChpKTtcbiAgICAgICAgICBkaXNwbGF5Q2FyZHMoZGlzcGxheSk7XG4gICAgICAgIH0sIDUpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0b2RvRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWYgKGNhcmRzW2ldLmdldERvbmUoKSkge1xuICAgICAgICB0b2RvRG9uZS5pbm5lclRleHQgPSAn4pyTJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9Eb25lLmlubmVyVGV4dCA9ICfil4snO1xuICAgICAgfVxuICAgICAgdG9kb0RvbmUuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzJyZW0nO1xuICAgICAgdG9kb0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhcmRzW2ldLmNoYW5nZURvbmUoKTtcbiAgICAgICAgZGlzcGxheUNhcmRzKGRpc3BsYXkpO1xuICAgICAgfSk7XG4gICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlKTtcbiAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9UZXh0KTtcbiAgICAgIHRvZG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9Eb25lKTtcbiAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3QtbGluZScpO1xuICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZSgndG9kby1saW5lJyk7XG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5KTtcbiAgICB9XG5cbiAgICBpZiAoY2FyZHMubGVuZ3RoIDwgMTIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGNvbnN0IGFkZENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhZGRDYXJkcy5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qZWN0LWxpbmUnKTtcbiAgICAgIGFkZENhcmRzLmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8tbGluZScpO1xuICAgICAgYWRkQ2FyZHMuaW5uZXJUZXh0ID0gJ0FkZCBUb2RvIEl0ZW0uLi4nO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgYWRkQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBjYXJkTmFtZSA9IHByb21wdCgnRW50ZXIgYSB0YXNrOicpO1xuICAgICAgICBpZiAoY2FyZE5hbWUubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICBjYXJkTmFtZSA9IGNhcmROYW1lLnN1YnN0cmluZygwLCAzMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkZWRDYXJkID0gY2FyZChjYXJkTmFtZSwgZmFsc2UpO1xuICAgICAgICBjYXJkcy5wdXNoKGFkZGVkQ2FyZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICBkaXNwbGF5Q2FyZHMoZGlzcGxheSk7XG4gICAgICB9KTtcbiAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkQ2FyZHMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsIGFkZENhcmQsIHJlbW92ZUNhcmQsIGRpc3BsYXlDYXJkcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=