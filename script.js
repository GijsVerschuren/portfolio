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

