import card from './card.js';

const project = (name) => {
    let cards = [];

    const addCard = (todo) => {
        cards.push(todo);
    }

    const removeCard = (todo) => {

    }

    const getCards = () => cards;

    return(addCard, removeCard, getCards);
}