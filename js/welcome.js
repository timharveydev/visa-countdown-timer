// Simplified and streamlined as much as I can get it. I know you said to use 'getElementById' instead of 'querySelector' wherever possible but I seem to be using 'querySelector' a lot throughout this project as I need to grab element tags more often than IDs.

let greeting;

if (new Date().getHours() < 12)
	greeting = 'Good morning';
else if (new Date().getHours() < 17)
	greeting = 'Good afternoon';
else if (new Date().getHours() <= 24)
	greeting = 'Good evening';

document.querySelector('h1').innerHTML = greeting + ', Gosia!';