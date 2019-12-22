let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Your eggs will be ready at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));