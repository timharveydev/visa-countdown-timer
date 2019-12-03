let greeting;

if (new Date().getHours() < 12)
	greeting = 'Good morning';
else if (new Date().getHours() < 17)
	greeting = 'Good afternoon';
else if (new Date().getHours() <= 24)
	greeting = 'Good evening';

document.querySelector('h1').innerHTML = greeting + ', Gosia!';