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
      todoDisplay.innerText = cards[i].getName();
      display.appendChild(todoDisplay);
    }
  };

  return {
    getName, addCard, removeCard, displayCards,
  };
};

export default project;
