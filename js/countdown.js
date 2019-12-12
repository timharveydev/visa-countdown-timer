// holds the total number of seconds in each denomination of time
const secsPerUnit = {
	'year' : 31536000,
	'month' : 2628000,
	'week' : 604800,
	'day' : 86400,
	'hour' : 3600,
	'minute' : 60,
	'second' : 1
}
// input a time value in seconds and a unit to output e.g. year, month, day. Outputs the number of said unit and the number of seconds leftover.
const getTime = (time, unit) => {
	return {
		[unit] : Math.floor(time / secsPerUnit[unit]),
		leftover : time % secsPerUnit[unit]
	}
}
// declares the total time remaining (let seconds), uses the 'getTime' function to input the time units into the HTML, pluralises the HTML lable, updates the 'let seconds' with the remainder each time. '0' and '.slice' are used to ensure each unit in the countdown is preceded by '0' if it is only one character long.
const updateClock = () => {
	let seconds = (Date.parse('2021-09-18 23:59:59 GMT') - Date.parse(new Date())) / 1000;
	// cancels the refresh interval (declared below) when the time remaining reaches 0.
	if (seconds <=0)
		clearInterval(refreshInterval);

	document.querySelector('#year span').innerHTML = ('0' + getTime(seconds, 'year')['year']).slice(-2);
	document.querySelector('#year p').innerHTML = (getTime(seconds, 'year')['year'] === 1) ? 'Year' : 'Years';
	seconds = getTime(seconds, 'year').leftover;

	document.querySelector('#month span').innerHTML = ('0' + getTime(seconds, 'month')['month']).slice(-2);
	document.querySelector('#month p').innerHTML = (getTime(seconds, 'month')['month'] === 1) ? 'Month' : 'Months';
	seconds = getTime(seconds, 'month').leftover;

	document.querySelector('#week span').innerHTML = ('0' + getTime(seconds, 'week')['week']).slice(-2);
	document.querySelector('#week p').innerHTML = (getTime(seconds, 'week')['week'] === 1) ? 'Week' : 'Weeks';
	seconds = getTime(seconds, 'week').leftover;

	document.querySelector('#day span').innerHTML = ('0' + getTime(seconds, 'day')['day']).slice(-2);
	document.querySelector('#day p').innerHTML = (getTime(seconds, 'day')['day'] === 1) ? 'Day' : 'Days';
	seconds = getTime(seconds, 'day').leftover;

	document.querySelector('#hour span').innerHTML = ('0' + getTime(seconds, 'hour')['hour']).slice(-2);
	document.querySelector('#hour p').innerHTML = (getTime(seconds, 'hour')['hour'] === 1) ? 'Hour' : 'Hours';
	seconds = getTime(seconds, 'hour').leftover;

	document.querySelector('#minute span').innerHTML = ('0' + getTime(seconds, 'minute')['minute']).slice(-2);
	document.querySelector('#minute p').innerHTML = (getTime(seconds, 'minute')['minute'] === 1) ? 'Minute' : 'Minutes';
	seconds = getTime(seconds, 'minute').leftover;

	document.querySelector('#second span').innerHTML = ('0' + seconds).slice(-2);
	document.querySelector('#second p').innerHTML = (getTime(seconds, 'second')['second'] === 1) ? 'Second' : 'Seconds';
}

updateClock();
// updates the countdown every second
const refreshInterval = setInterval(updateClock, 1000);