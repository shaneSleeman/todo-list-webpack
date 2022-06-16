/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import card from './card.js';

const project = (name) => {
  const cards = [];

  const getName = () => name;

  const addCard = (todo) => {
    cards.push(todo);
  };

  const removeCard = (todo) => {

  };

  const displayCards = (display) => {
    display.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
      const todoDisplay = document.createElement('div');
      const todoText = document.createElement('div');
      todoText.innerText = cards[i].getName();
      const todoDelete = document.createElement('div');
      todoDelete.innerText = '⨂';
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
        const entered = card(cardName, false);
        cards.push(entered);
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
