const secsPerUnit = {
	'years' : 31536000,
	'months' : 2628000,
	'weeks' : 604800,
	'days' : 86400,
	'hours' : 3600,
	'minutes' : 60,
	'seconds' : 1
}

const secsToUnit = (seconds, unit) => {
	return {
		[unit] : Math.floor(seconds / secsPerUnit[unit]),
		remainder : seconds % secsPerUnit[unit]
	}
}

const updateClock = () => {
	let secondsRemaining = (Date.parse('2021-09-18 23:59:59 GMT') - Date.parse(new Date())) / 1000;
  if (secondsRemaining <= 0)
		clearInterval(refreshInterval);

  const assignUnitsToClock = (unit) => {
    const unitObject = secsToUnit(secondsRemaining, unit);

    document.querySelector(`#${unit} span`).innerHTML = ('0' + unitObject[unit]).slice(-2);
    document.querySelector(`#${unit} p`).innerHTML = (unitObject[unit] === 1) ? `${unit}`.slice(0, -1) : `${unit}`;
    secondsRemaining = unitObject.remainder;
  }
  
  for (i = 0; i < 7; i++) {
    assignUnitsToClock(Object.keys(secsPerUnit)[i]);
  }
}

updateClock();
const refreshInterval = setInterval(updateClock, 1000);