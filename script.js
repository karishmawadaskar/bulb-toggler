const bulbElement = document.getElementById('bulb');

function bulbOn() {
    bulbElement.src = "./images/on.png";
    bulbElement.classList.add('night');
}

function bulbOff() {
    bulbElement.src = "./images/off.png";
    bulbElement.classList.remove('night');
}