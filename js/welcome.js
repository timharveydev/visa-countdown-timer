const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12)
	greeting = "Good morning";
else if (currentHour < 18)
	greeting = "Good afternoon";
else if (currentHour <= 24)
	greeting = "Good evening";

document.getElementById("welcome-msg").innerHTML = greeting + ", Gosia!";