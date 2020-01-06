const secondsPerUnit = {
	'years' : 31536000,
	'months' : 2628000,
	'weeks' : 604800,
	'days' : 86400,
	'hours' : 3600,
	'minutes' : 60,
	'seconds' : 1
}

/**
  * @desc - converts seconds into a different unit of time
  * @param number seconds - the number of seconds to be converted
  * @param string unit - the unit of conversion. IMPORTANT! must be entered in plural e.g. 'years'
  * @return object - 1st key is unit parameter with integer value e.g. 'years' : 2
                   - 2nd key is remainder of seconds after conversion e.g. remainder : 13782
*/
const convertSecondsToUnit = (seconds, unit) => {
	return {
		[unit] : Math.floor(seconds / secondsPerUnit[unit]),
		remainder : seconds % secondsPerUnit[unit]
	}
}

// Runs code that assigns times to the countdown clock
const updateClock = () => {
  // The total seconds remaining until the end date
	let secondsRemaining = (Date.parse('2021-09-18 23:59:59 GMT') - Date.parse(new Date())) / 1000;
  if (secondsRemaining <= 0)
		clearInterval(refreshInterval);

  /**
    * @desc - calculates single unit of time and stores resulting object in unitObject variable
            - inputs time into HTML ensuring each number has two characters e.g. '01' instead of '1'
            - pluralises time unit label (in HTML p tag) e.g. 01 year - 02 years
            - assign seconds remaining after calculation to the secondsRemaining variable
    * @param string unit - the unit of time to calculate. IMPORTANT! must be entered in plural e.g. 'years'
  */
  const assignUnitsToClock = (unit) => {
    const unitObject = convertSecondsToUnit(secondsRemaining, unit);
    document.querySelector(`#${unit} span`).innerHTML = `0${unitObject[unit]}`.slice(-2);
    document.querySelector(`#${unit} p`).innerHTML = (unitObject[unit] === 1) ? `${unit}`.slice(0, -1) : `${unit}`;
    secondsRemaining = unitObject.remainder;
  }
  
  // Assigns each consecutive unit of time to the clock - units taken from secondsPerUnit object
  for (let i = 0; i < 7; i++) {
    assignUnitsToClock(Object.keys(secondsPerUnit)[i]);
  }
}

// Update the clock every second. IMPORTANT! updateClock() must run before refreshInterval to avoid inital 1 second delay
updateClock();
const refreshInterval = setInterval(updateClock, 1000);