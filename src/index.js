import './style.css';
import {addProject, removeProject, displayProjects} from './projects.js';
/*
const body = document.querySelector("body");

const title = document.createElement("h1");
title.innerText = "Test";

body.appendChild(title);
*/

const body = document.querySelector("body");

const header = document.createElement("div");
header.classList.toggle("header");
header.innerText = "Todo List!";

const content = document.createElement("div");
content.classList.toggle("content");

const projects = document.createElement("div");
projects.classList.toggle("projects");
projects.innerText = ".";
const cards = document.createElement("div");
cards.classList.toggle("cards");
cards.innerText = ".";
content.appendChild(projects);
content.appendChild(cards);

const footer = document.createElement("div");
footer.classList.toggle("footer");
footer.innerText = "(c) Shane Sleeman 2022";

body.appendChild(header);
body.appendChild(content);
body.appendChild(footer);