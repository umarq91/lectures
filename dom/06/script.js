let timer = document.getElementById('timer');

let startTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format and pad with leading zeros if necessary
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    timer.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

setInterval(startTime, 1000);
