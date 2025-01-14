let projectIndex = 1;

function projectNext() {
    let currentProject = document.getElementById("project" + projectIndex);
    projectIndex = (projectIndex % 3) + 1;
    let nextProject = document.getElementById("project" + projectIndex);

    nextProject.style.display = "flex";
    currentProject.style.display = "none";
}

function projectPrevious() {
    let currentProject = document.getElementById("project" + projectIndex);
    projectIndex = (projectIndex - 2 + 3) % 3 + 1;
    let previousProject = document.getElementById("project" + projectIndex);

    previousProject.style.display = "flex";
    currentProject.style.display = "none";
}