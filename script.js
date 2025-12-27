let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function start() {
    if (timerInterval) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00:00";
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10); 
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById("display").textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, "0");
}


document.getElementById("display").textContent = "00:00:00:00";
