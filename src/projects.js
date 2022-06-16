import project from './project.js';

let projects = [];

function addProject(name) {
    projects.push(project(name));
}

function removeProject(project) {

}

function displayProjects(display, display2) {
    display.innerHTML = "";
    for(let i = 0; i < projects.length; i++) {
        const projectDisplay = document.createElement("div");
        projectDisplay.innerText = projects[i].getName();
        projectDisplay.addEventListener("click", () => {
            projects[i].displayCards(display2);
        });
        display.appendChild(projectDisplay);
    }
}

function getProject(n) {
    return projects[n];
}

export {addProject, removeProject, displayProjects, getProject};