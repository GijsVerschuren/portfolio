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

function switchSVG() {
    const plankSVG = document.getElementById("plankSVG");
    const plankPhoneSVG = document.getElementById("plankPhoneSVG");

    if (window.innerWidth < 600) {
        plankSVG.style.display = "none";
        plankPhoneSVG.style.display = "block";
    } else {
        plankSVG.style.display = "block";
        plankPhoneSVG.style.display = "none";
    }
}

window.addEventListener("resize", switchSVG);
window.addEventListener("load", switchSVG);