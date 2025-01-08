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
}

document.addEventListener('DOMContentLoaded', projectText);
