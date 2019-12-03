const endDate = '2021-09-18 23:59:59 GMT';
let secondsRemaining = (Date.parse(endDate) - Date.parse(new Date())) / 1000;

const secondsPerUnit = {
	year : 31536000,
	month : 2628000,
	week : 604800,
	day : 86400,
	hour : 3600,
	minute : 60
}


const getUnits = (time, unit) => {
	switch (unit) {

		case 'years':
			return {
				years : Math.floor(time / secondsPerUnit.year),
				seconds : time % secondsPerUnit.year
			}
			break;

		case 'months':
			return {
				months : Math.floor(time / secondsPerUnit.month),
				seconds : time % secondsPerUnit.month
			}
			break;

		case 'weeks':
			return {
				weeks : Math.floor(time / secondsPerUnit.week),
				seconds : time % secondsPerUnit.week
			}
			break;

		case 'days':
			return {
				days : Math.floor(time / secondsPerUnit.day),
				seconds : time % secondsPerUnit.day
			}
			break;

		case 'hours':
			return {
				hours : Math.floor(time / secondsPerUnit.hour),
				seconds : time % secondsPerUnit.hour
			}
			break;

		case 'minutes':
			return {
				minutes : Math.floor(time / secondsPerUnit.minute),
				seconds : time % secondsPerUnit.minute
			}
			break;
	}
}





/*const endDate = '2021-09-18 23:59:59 GMT';

const getTimeRemaining = endDate => { //this function finds the remaining time in miliseconds and divides it up into more useful units, then outputs into an object
	const total = Date.parse(endDate) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / 1000 / 60 / 60) % 24);
	const days = Math.floor((total / 1000 / 60 / 60 / 24) % 7);
	const weeks = Math.floor((total / 1000 / 60 / 60 / 24 / 7) % 4);
	const months = Math.floor((total / 1000 / 60 / 60 / 24 / 7 / 4) % 12);
	const years = Math.floor(total / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
	return {
		'total': total,
		'seconds': seconds,
		'minutes': minutes,
		'hours': hours,
		'days': days,
		'weeks': weeks,
		'months': months,
		'years': years
	};
};

const initClock = (id, endDate) => { //this function initializes the clock data into the correct HTML elements on the page and refreshes every second
	const clock = document.getElementById(id);

	// these variables hold the span elements where the countdown times will be placed
	const yearSpan = clock.querySelector('#years');
	const monthSpan = clock.querySelector('#months');
	const weekSpan = clock.querySelector('#weeks');
	const daySpan = clock.querySelector('#days');
	const hourSpan = clock.querySelector('#hours');
	const minuteSpan = clock.querySelector('#minutes');
	const secondSpan = clock.querySelector('#seconds');

	// these variables hold the label tags for the countdown time boxes
	const yearLabel = clock.querySelector('#year-label');
	const monthLabel = clock.querySelector('#month-label');
	const weekLabel = clock.querySelector('#week-label');
	const dayLabel = clock.querySelector('#day-label');
	const hourLabel = clock.querySelector('#hour-label');
	const minuteLabel = clock.querySelector('#minute-label');
	const secondLabel = clock.querySelector('#second-label');

	const updateClock = () => {
		const t = getTimeRemaining(endDate);

		// this code inputs the remaining times into the correct span variables' innerHTML, including leading zeros
		yearSpan.innerHTML = ('0' + t.years).slice(-2);
		monthSpan.innerHTML = ('0' + t.months).slice(-2);
		weekSpan.innerHTML = ('0' + t.weeks).slice(-2);
		daySpan.innerHTML = ('0' + t.days).slice(-2);
		hourSpan.innerHTML = ('0' + t.hours).slice(-2);
		minuteSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondSpan.innerHTML = ('0' + t.seconds).slice(-2);

		// this code pluralises or singularises the labels depending on the value of the time remaining being above "1"
		yearLabel.innerHTML = (t.years === 1) ? 'Year' : 'Years';
		monthLabel.innerHTML = (t.months === 1) ? 'Month' : 'Months';
		weekLabel.innerHTML = (t.weeks === 1) ? 'Week' : 'Weeks';
		dayLabel.innerHTML = (t.days === 1) ? 'Day' : 'Days';
		hourLabel.innerHTML = (t.hours === 1) ? 'Hour' : 'Hours';
		minuteLabel.innerHTML = (t.minutes === 1) ? 'Minute' : 'Minutes';
		secondLabel.innerHTML = (t.seconds === 1) ? 'Second' : 'Seconds';

		if (t.total <= 0) //this stops the clock refreshing when it hits 0
			clearInterval(refreshInterval);
	}
	
	updateClock();
	const refreshInterval = setInterval(updateClock, 1000);
}

initClock('countdown', endDate);*/