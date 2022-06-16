import project from './project.js';

let projects = [];
let selected = 0;

function addProject(name) {
    projects.push(project(name));
}

function removeProject(i) {
    let half1 = projects.slice(0, i);
    let half2 = projects.slice(i + 1, projects.length);
    projects = half1.concat(half2);
}

function displayProjects(display, display2) {
    display.innerHTML = "";
    for(let i = 0; i < projects.length; i++) {
        const projectDisplay = document.createElement("div");
        projectDisplay.classList.toggle('project-line');
        projectDisplay.classList.remove("selected");
        if(i == selected) {
            projectDisplay.classList.add("selected");
        }
        projectDisplay.innerText = projects[i].getName();
        const projectRemove = document.createElement("div");
        projectRemove.innerText = "⨂";
        projectRemove.addEventListener("click", () => {
            removeProject(i);
            displayProjects(display, display2);
        });
        projectDisplay.appendChild(projectRemove);
        projectDisplay.addEventListener("click", () => {
            selected = i;
            displayProjects(display, display2);
            projects[i].displayCards(display2);
        });
        display.appendChild(projectDisplay);
    }
    if(projects.length < 12) {
        const addProject = document.createElement("div");
        addProject.classList.toggle('project-line');
        addProject.innerText = "Add Project...";
        addProject.addEventListener("click", () => {
            let projectName = prompt("Enter a project name:");
            projects.push(project(projectName));
            displayProjects(display, display2);
        })
        display.appendChild(addProject);
    }
}

function getProject(n) {
    return projects[n];
}

export {addProject, removeProject, displayProjects, getProject};