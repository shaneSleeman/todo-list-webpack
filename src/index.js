/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import './style.css';
import {
  addProject, removeProject, displayProjects, getProject,
} from './projects.js';
import { card } from './card.js';

const body = document.querySelector('body');

const header = document.createElement('div');
header.classList.toggle('header');
header.innerText = 'Todo List ☑';

const content = document.createElement('div');
content.classList.toggle('content');

const projects = document.createElement('div');
projects.classList.toggle('projects');
const cards = document.createElement('div');
cards.classList.toggle('cards');
cards.innerText = '.';
content.appendChild(projects);
content.appendChild(cards);

const footer = document.createElement('div');
footer.classList.toggle('footer');
footer.innerText = '© Shane Sleeman 2022';

body.appendChild(header);
body.appendChild(content);
body.appendChild(footer);

addProject('Inbox');
addProject('Today');

const card1 = card('a', 'b', 'c');
const card2 = card('b', 'b', 'c');
const card3 = card('c', 'b', 'c');
const card4 = card('d', 'b', 'c');
const card5 = card('e', 'b', 'c');
getProject(0).addCard(card1);
getProject(0).addCard(card2);
getProject(0).addCard(card3);
getProject(1).addCard(card4);
getProject(1).addCard(card5);
displayProjects(projects, cards);
getProject(0).displayCards(cards);

export { cards };
