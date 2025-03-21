let timers = {};

function toggleSeat(seatId) {
    let seat = document.getElementById(seatId);
    let timerId = "timer" + seatId.charAt(seatId.length - 1);
    let timer = document.getElementById(timerId);

    if (seat.classList.contains("available")) {
        seat.classList.remove("available");
        seat.classList.add("occupied");
        seat.textContent = "🪑 Occupied";
        
        // Start timer
        timers[timerId] = 0;
        updateTimer(timerId);
    } else {
        seat.classList.remove("occupied");
        seat.classList.add("available");
        seat.textContent = "🪑 Available";
        
        // Stop timer
        clearInterval(timers[timerId]);
        timer.textContent = "00:00";
    }
}

function updateTimer(timerId) {
    let timer = document.getElementById(timerId);
    timers[timerId] = setInterval(() => {
        let timeParts = timer.textContent.split(":");
        let minutes = parseInt(timeParts[0]);
        let seconds = parseInt(timeParts[1]);

        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        timer.textContent = 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;
    }, 1000);
}
