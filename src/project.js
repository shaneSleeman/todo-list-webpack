/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { card } from './card.js';

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
        const cardName = prompt('Enter a task:');
        const addedCard = card(cardName, false);
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

export default project;
