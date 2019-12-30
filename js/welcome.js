const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12)
	greeting = 'Good morning';
else if (currentHour < 17)
	greeting = 'Good afternoon';
else if (currentHour <= 24)
	greeting = 'Good evening';

document.querySelector('h1').innerHTML = `${greeting}, Gosia!`;