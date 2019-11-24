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

function initClock(id, endDate) { //this function initializes the clock data into the correct HTML elements on the page
	const clock = document.querySelector(id);
	const yearSpan = clock.querySelector("#years");
	const monthSpan = clock.querySelector("#months");
	const weekSpan = clock.querySelector("#weeks");
	const daySpan = clock.querySelector("#days");
	const hourSpan = clock.querySelector("#hours");
	const minuteSpan = clock.querySelector("#minutes");
	const secondSpan = clock.querySelector("#seconds");

	function updateClock() {
		const t = getTimeRemaining(endDate);
		yearSpan.innerHTML = t.years;
		monthSpan.innerHTML = t.months;
		weekSpan.innerHTML = t.weeks;
		daySpan.innerHTML = t.days;
		hourSpan.innerHTML = t.hours;
		minuteSpan.innerHTML = t.minutes;
		secondSpan.innerHTML = t.seconds;

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
quoteArray[10] = "Don't let circumstances controle you. You change your circumstances.";

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