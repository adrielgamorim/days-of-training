const days = document.getElementsByClassName('days');

const daysPassed = await moment().diff('2024-03-13', 'days');

const filteredMonths = Math.floor(daysPassed / 30);

const filteredDays = daysPassed % 30;

let message = `${filteredMonths} month${filteredMonths > 1 ? 's' : ''} and ${filteredDays} days`;

if (daysPassed % 30 === 0) {
    message = `${filteredMonths} whole months!<br>Congratulations!`;
}

message += `<br>(${daysPassed} days)`

days[0].innerHTML = message;