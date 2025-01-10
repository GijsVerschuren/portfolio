//show home text
function HomeText() {
    const oneDiv = document.getElementById('one');
    const textDiv = document.querySelector('.text');
    const svgElement = textDiv.querySelector('svg');
    const textContent = textDiv.innerHTML.replace(svgElement.outerHTML, '');
    textDiv.innerHTML = '';
    textDiv.appendChild(svgElement);

    oneDiv.addEventListener('mouseover', () => {
        textDiv.classList.add("show");

    });

    oneDiv.addEventListener('mouseout', () => {
        textDiv.classList.remove("show");

    });

    oneDiv.addEventListener('click', () => {
        location.href = "index.html";
    });
}

document.addEventListener('DOMContentLoaded', HomeText);



//show project text
function projectText() {
    const twoDiv = document.getElementById('two');
    const projectDiv = document.querySelector('.projects');
    const svgElement = projectDiv.querySelector('svg');
    const textContent = projectDiv.innerHTML.replace(svgElement.outerHTML, '');
    projectDiv.innerHTML = '';
    projectDiv.appendChild(svgElement);

    twoDiv.addEventListener('mouseover', () => {
        projectDiv.classList.add("show");

    });

    twoDiv.addEventListener('mouseout', () => {
        projectDiv.classList.remove("show");

    });

    twoDiv.addEventListener('click', () => {
        location.href = "../projects/projects.html";
    });
}

document.addEventListener('DOMContentLoaded', projectText);



//show about me text
function AboutMeText() {
    const threeDiv = document.getElementById('three');
    const aboutMeDiv = document.querySelector('.aboutMe');
    const svgElement = aboutMeDiv.querySelector('svg');
    const textContent = aboutMeDiv.innerHTML.replace(svgElement.outerHTML, '');
    aboutMeDiv.innerHTML = '';
    aboutMeDiv.appendChild(svgElement);

    threeDiv.addEventListener('mouseover', () => {
        aboutMeDiv.classList.add("show");

    });

    threeDiv.addEventListener('mouseout', () => {
        aboutMeDiv.classList.remove("show");

    });

    threeDiv.addEventListener('click', () => {
        location.href = "../aboutme/aboutme.html";
    });
}

document.addEventListener('DOMContentLoaded', AboutMeText);




//show contact text
function contactText() {
    const fourDiv = document.getElementById('four');
    const contactDiv = document.querySelector('.contact');
    const svgElement = contactDiv.querySelector('svg');
    const textContent = contactDiv.innerHTML.replace(svgElement.outerHTML, '');
    contactDiv.innerHTML = '';
    contactDiv.appendChild(svgElement);

    fourDiv.addEventListener('mouseover', () => {
        contactDiv.classList.add("show");

    });

    fourDiv.addEventListener('mouseout', () => {
        contactDiv.classList.remove("show");

    });

    fourDiv.addEventListener('click', () => {
        location.href = "../contact/contact.php";
    });
}

document.addEventListener('DOMContentLoaded', contactText);
