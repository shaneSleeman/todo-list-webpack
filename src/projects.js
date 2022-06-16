import project from './project.js';

let projects = [];

function addProject(name) {
    projects.push(project(name));
}

function removeProject(project) {

}

function displayProjects(display) {
    display.innerHTML = "";
    for(let i = 0; i < projects.length; i++) {
        const projectDisplay = document.createElement("div");
        projectDisplay.innerText = projects[i].getName();
        display.appendChild(projectDisplay);
    }
}

export {addProject, removeProject, displayProjects};