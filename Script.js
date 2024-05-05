const textElement = document.getElementById('text');
const phrases = [
    'Wake up, Neo...',
    'The Matrix has you...',
    'Follow the white rabbit.',
    'Do not try and bend the spoon. That\'s impossible...',
    'There is no spoon.',
    'Welcome to the real world.',
    'Free your mind...',
    'The Matrix is everywhere...',
    'Unfortunately, no one can be told what the Matrix is...',
    'You have to see it for yourself.'
];

let index = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const currentPhrase = phrases[index];
    if (isDeleting) {
        currentText = currentPhrase.substring(0, currentText.length - 1);
    } else {
        currentText = currentPhrase.substring(0, currentText.length + 1);
    }
    textElement.innerHTML = currentText;

    let typeSpeed = 100;
    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && currentText === currentPhrase) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);
