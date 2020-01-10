const currentHour = new Date().getHours();
let greeting;

// Assigns different welcome message to greeting variable depending on time of day
if (currentHour < 12)
  greeting = 'Good morning, Gosia!';
else if (currentHour < 18)
  greeting = 'Good afternoon, Gosia!';
else if (currentHour <= 24)
  greeting = 'Good evening, Gosia!';

document.querySelector('h1').innerHTML = greeting;