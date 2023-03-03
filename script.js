'use strict';
let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
let highscore = 0;
let attempt = 20;
document.getElementById('guess').addEventListener('click', function () {
    const guess = Number(document.querySelector('.field').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.display').innerHTML = "⛔enter valid number";
    } else if (guess === random) {
        document.querySelector('.display').innerHTML = "correct answer🎉";
        document.querySelector('.btn').innerHTML = random;
        document.querySelector('body').style.backgroundColor = 'green';
        if (attempt > highscore) {
            highscore = attempt;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess >= random) {
        document.querySelector('.display').textContent = "entered number is too high📈"
        attempt--;
        document.querySelector('.attemptsleft').textContent = attempt;
        if (attempt < 1)
            document.querySelector('.display').innerHTML = "🚫you lose🚫";

    } else if (guess <= random) {
        document.querySelector('.display').textContent = "entered number is too low📉"
        attempt--;
        document.querySelector('.attemptsleft').textContent = attempt;
        if (attempt < 1)
            document.querySelector('.display').innerHTML = "🚫you lose🚫";

    }
});
document.querySelector('.reset').addEventListener('click', function () {
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    attempt = 20;
    document.querySelector('.attemptsleft').textContent = attempt;
    document.querySelector('.field').value = ' ';
    document.querySelector('body').style.backgroundColor = 'bisque';
    document.querySelector('.display').innerHTML = "🎊start guessing!🎊";
    document.querySelector('.btn').innerHTML = "?";
})