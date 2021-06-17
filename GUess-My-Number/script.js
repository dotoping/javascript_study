"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (param, message) => {
    document.querySelector(param).textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('.message', '🚧 No Number!');
    } else if (guess < 1 || guess > 20) {
        displayMessage('.message', 'Only between 1 and 20');

        // when guess is correct
    } else if (guess === secretNumber) {
        displayMessage('.message', '🎊 Correct Number!!');
        displayMessage('.number', secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            displayMessage('.highscore', highscore);

        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage('.message', guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            displayMessage('.score', score);
        }
    }
    else {
        displayMessage('.score', '🤔 Wrong Number, Try again!');
    }
});


// reset Again!
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('.message', 'Start guessing....');
    displayMessage('.score', score);
    displayMessage('.number', '?');
    displayMessage('.guess', '');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})