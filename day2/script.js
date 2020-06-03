const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();

	const hourDegrees = hour/24*360 + 90;
	const minuteDegrees = minute/60*360 + 90;
	const secondDegrees = second/60*360 + 90;

	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	console.log(hourDegrees, minuteDegrees, secondDegrees);
}

setInterval(setDate, 1000);
