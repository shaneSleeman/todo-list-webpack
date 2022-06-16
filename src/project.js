import card from './card.js';

const project = (name) => {
    let cards = [];

    const getName = () => name;

    const addCard = (todo) => {
        cards.push(todo);
    }

    const removeCard = (todo) => {

    }

    const getCards = () => cards;

    return{getName, addCard, removeCard, getCards};
}

export default project;