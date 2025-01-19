//show home text
function HomeText() {
    const oneDiv = document.getElementById('one');
    const textDiv = document.querySelector('.text');
    const svgElement = textDiv.querySelector('svg');
    const textContent = textDiv.innerHTML.replace(svgElement.outerHTML, '');
    textDiv.innerHTML = '';
    textDiv.appendChild(svgElement);

    if (window.innerWidth < 600) {
        oneDiv.addEventListener('click', () => {
            textDiv.classList.toggle("show");
        });
    } else {
        oneDiv.addEventListener('mouseover', () => {
            textDiv.classList.add("show");
        });

        oneDiv.addEventListener('mouseout', () => {
            textDiv.classList.remove("show");
        });
    }

    oneDiv.addEventListener('click', () => {
        if (window.innerWidth < 600) {
            setTimeout(() => {
                location.href = "index.html";
                textDiv.classList.remove("show");
            }, 3500);
        } else {
            location.href = "index.html";
        }
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

    if (window.innerWidth < 600) {
        twoDiv.addEventListener('click', () => {
            projectDiv.classList.toggle("show");
        });
    } else {
        twoDiv.addEventListener('mouseover', () => {
            projectDiv.classList.add("show");
        });

        twoDiv.addEventListener('mouseout', () => {
            projectDiv.classList.remove("show");
        });
    }

    twoDiv.addEventListener('click', () => {
        if (window.innerWidth < 600) {
            setTimeout(() => {
                location.href = "../projects/projects.html";
                projectDiv.classList.remove("show");
            }, 3500);
        } else {
            location.href = "../projects/projects.html";
        }
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

    if (window.innerWidth < 600) {
        threeDiv.addEventListener('click', () => {
            aboutMeDiv.classList.toggle("show");
        });
    } else {
        threeDiv.addEventListener('mouseover', () => {
            aboutMeDiv.classList.add("show");
        });

        threeDiv.addEventListener('mouseout', () => {
            aboutMeDiv.classList.remove("show");
        });
    }

    threeDiv.addEventListener('click', () => {
        if (window.innerWidth < 600) {
            setTimeout(() => {
                location.href = "../aboutme/aboutme.html";
                aboutMeDiv.classList.remove("show");
            }, 3500);
        } else {
            location.href = "../aboutme/aboutme.html";
        }
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

    if (window.innerWidth < 600) {
        fourDiv.addEventListener('click', () => {
            contactDiv.classList.toggle("show");
        });
    } else {
        fourDiv.addEventListener('mouseover', () => {
            contactDiv.classList.add("show");
        });

        fourDiv.addEventListener('mouseout', () => {
            contactDiv.classList.remove("show");
        });
    }

    fourDiv.addEventListener('click', () => {
        if (window.innerWidth < 600) {
            setTimeout(() => {
                location.href = "../contact/contact.php";
                contactDiv.classList.remove("show");
            }, 3500);
        } else {
            location.href = "../contact/contact.php";
        }
    });
}

document.addEventListener('DOMContentLoaded', contactText);
