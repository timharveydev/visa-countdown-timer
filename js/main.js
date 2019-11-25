//WELCOME MSG
const currentDate = new Date();
const currentHour = currentDate.getHours();
const welcomeMsg = document.querySelector("#welcome-msg");
let greeting;

if (currentHour > 0 && currentHour < 12) {
	greeting = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
	greeting = "Good afternoon";
} else if ((currentHour >= 18 && currentHour <= 24) || currentHour === 0) {
	greeting = "Good evening";
} else {
	greeting = "Hello";
}

welcomeMsg.innerHTML = greeting + " Gosia!";




//COUNTDOWN
const endDate = "2021-09-18 23:59:59 GMT";

function getTimeRemaining(endDate) { //this function finds the remaining time in miliseconds and divides it up into more useful units, then outputs into an object
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

function initClock(id, endDate) { //this function initializes the clock data into the correct HTML elements on the page and refreshes every second
	const clock = document.querySelector(id);

	/* these variables hold the span elements where the countdown times will be placed */
	const yearSpan = clock.querySelector("#years");
	const monthSpan = clock.querySelector("#months");
	const weekSpan = clock.querySelector("#weeks");
	const daySpan = clock.querySelector("#days");
	const hourSpan = clock.querySelector("#hours");
	const minuteSpan = clock.querySelector("#minutes");
	const secondSpan = clock.querySelector("#seconds");

	/* these variables hold the label tags for the countdown time boxes */
	const yearLabel = clock.querySelector("#year-label");
	const monthLabel = clock.querySelector("#month-label");
	const weekLabel = clock.querySelector("#week-label");
	const dayLabel = clock.querySelector("#day-label");
	const hourLabel = clock.querySelector("#hour-label");
	const minuteLabel = clock.querySelector("#minute-label");
	const secondLabel = clock.querySelector("#second-label");

	function updateClock() {
		const t = getTimeRemaining(endDate);

		/* this code inputs the remaining times into the correct span variables' innerHTML, including leading zeros */
		yearSpan.innerHTML = ("0" + t.years).slice(-2);
		monthSpan.innerHTML = ("0" + t.months).slice(-2);
		weekSpan.innerHTML = ("0" + t.weeks).slice(-2);
		daySpan.innerHTML = ("0" + t.days).slice(-2);
		hourSpan.innerHTML = ("0" + t.hours).slice(-2);
		minuteSpan.innerHTML = ("0" + t.minutes).slice(-2);
		secondSpan.innerHTML = ("0" + t.seconds).slice(-2);

		/* this code pluralises or singularises the labels depending on the value of the time remaining being above "1" */
		if (t.years === 1) {
			yearLabel.innerHTML = "Year";
		} else {
			yearLabel.innerHTML = "Years";
		}
		if (t.months === 1) {
			monthLabel.innerHTML = "Month";
		} else {
			monthLabel.innerHTML = "Months";
		}
		if (t.weeks === 1) {
			weekLabel.innerHTML = "Week";
		} else {
			weekLabel.innerHTML = "Weeks";
		}
		if (t.days === 1) {
			dayLabel.innerHTML = "Day";
		} else {
			dayLabel.innerHTML = "Days";
		}
		if (t.hours === 1) {
			hourLabel.innerHTML = "Hour";
		} else {
			hourLabel.innerHTML = "Hours";
		}
		if (t.minutes === 1) {
			minuteLabel.innerHTML = "Minute";
		} else {
			minuteLabel.innerHTML = "Minutes";
		}
		if (t.seconds === 1) {
			secondLabel.innerHTML = "Second";
		} else {
			secondLabel.innerHTML = "Seconds";
		}



		if (t.total <= 0) { //this stops the clock refreshing when it hits 0
			clearInterval(refreshInterval);
		};
	}
	
	updateClock();
	const refreshInterval = setInterval(updateClock, 1000);
}

initClock("#countdown", endDate);




//QUOTE

const quoteTxt = document.querySelector("#quote-txt");
const quoteSrc = document.querySelector("#quote-src");

/* The two arrays below act as a bank of quotes. The first array holds the quotes, the second array holds the authors at the same indexes. */
const quoteArray = new Array();
quoteArray[0] = "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.";
quoteArray[1] = "Strive not to be a success, but rather to be of value.";
quoteArray[2] = "I may not have gone where I intended to go, but I think I have ended up where I needed to be.";
quoteArray[3] = "A reader lives a thousand lives before he dies. The man who never reads lives only one.";
quoteArray[4] = "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.";
quoteArray[5] = "Never miss a good chance to shut up.";
quoteArray[6] = "The scariest moment is always just before you start.";
quoteArray[7] = "Whether you believe you can do a thing or not, you are right.";
quoteArray[8] = "Coming back to where you started is not the same as never leaving.";
quoteArray[9] = "When I ask how old your toddler is, I don't need to hear '27 months.' 'He's two' will do just fine. He's not a cheese. And I didn't really care in the first place.";
quoteArray[10] = "Don't let circumstances control you. You change your circumstances.";

const authorArray = new Array();
authorArray[0] = "Bernard M. Baruch";
authorArray[1] = "Albert Einstein";
authorArray[2] = "Douglas Adams";
authorArray[3] = "George R.R. Martin";
authorArray[4] = "Carl Sagan";
authorArray[5] = "Will Rogers";
authorArray[6] = "Stephen King";
authorArray[7] = "Henry Ford";
authorArray[8] = "Terry Pratchett";
authorArray[9] = "George Carlin";
authorArray[10] = "Jackie Chan";

const index = Math.floor(Math.random() * quoteArray.length); //randomly selects a matching index from each array

quoteTxt.innerHTML = '"' + quoteArray[index] + '"';
quoteSrc.innerHTML = '- ' + authorArray[index];