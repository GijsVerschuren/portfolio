let projectIndex = 1;

function projectNext() {
    if (projectIndex < 3) {
        projectIndex++;
    }

    let nextProject = document.getElementById("project" + projectIndex);
    let currentProject = document.getElementById("project" + (projectIndex - 1));

    nextProject.style.display = "flex";
    currentProject.style.display = "none";

}

function projectPrevious () {
    if (projectIndex > 1) {
        projectIndex--;
    }

    let previousProject = document.getElementById("project" + projectIndex);
    let currentProject = document.getElementById("project" + (projectIndex + 1));

    previousProject.style.display = "flex";
    currentProject.style.display = "none";
}