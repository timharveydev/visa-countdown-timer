const endDate = '2021-09-18 23:59:59 GMT';

const secsPerUnit = {
	'year' : 31536000,
	'month' : 2628000,
	'week' : 604800,
	'day' : 86400,
	'hour' : 3600,
	'minute' : 60,
	'second' : 1
}

const getTime = (time, unit) => {
		return {
			[unit] : Math.floor(time / secsPerUnit[unit]),
			leftover : time % secsPerUnit[unit]
		}//include pluraliser here?
	}

const updateClock = () => {
	let seconds = (Date.parse(endDate) - Date.parse(new Date())) / 1000;
	if (seconds <=0)
		clearInterval(refreshInterval);

	document.querySelector('#years span').innerHTML = ('0' + getTime(seconds, 'year')['year']).slice(-2);
	seconds = getTime(seconds, 'year').leftover;
	document.querySelector('#months span').innerHTML = ('0' + getTime(seconds, 'month')['month']).slice(-2);
	seconds = getTime(seconds, 'month').leftover;
	document.querySelector('#weeks span').innerHTML = ('0' + getTime(seconds, 'week')['week']).slice(-2);
	seconds = getTime(seconds, 'week').leftover;
	document.querySelector('#days span').innerHTML = ('0' + getTime(seconds, 'day')['day']).slice(-2);
	seconds = getTime(seconds, 'day').leftover;
	document.querySelector('#hours span').innerHTML = ('0' + getTime(seconds, 'hour')['hour']).slice(-2);
	seconds = getTime(seconds, 'hour').leftover;
	document.querySelector('#minutes span').innerHTML = ('0' + getTime(seconds, 'minute')['minute']).slice(-2);
	seconds = getTime(seconds, 'minute').leftover;
	document.querySelector('#seconds span').innerHTML = ('0' + seconds).slice(-2);
}

updateClock();
const refreshInterval = setInterval(updateClock, 1000);

/*
.innerHTML = (getTime(seconds, 'year')['year'] === 1) ? 'Year' : 'Years';
*/