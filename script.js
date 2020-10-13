const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const newYear = '1 Jan 2021';

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    diff = newYearDate - currentDate;

    const secondsRemaining = Math.floor(diff / 1000);

    const daysLeft = Math.floor(secondsRemaining / 3600 / 24);
    const hoursLeft = Math.floor(secondsRemaining / 3600) % 24;
    const minutesLeft = Math.floor(secondsRemaining / 60) % 60;
    const secondsLeft = Math.floor(secondsRemaining) % 60;

    daysElement.innerHTML = daysLeft;
    hoursElement.innerHTML = formatTime(hoursLeft);
    minutesElement.innerHTML = formatTime(minutesLeft);
    secondsElement.innerHTML = formatTime(secondsLeft);


    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// Initial call
countDown();
setInterval(countDown, 1000);
