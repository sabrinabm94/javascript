//time

//setTimeOut, run only one time after 1 secs
setTimeout(function() {
	console.log("");
	console.log("setTimeout");
	console.log("for 1 secs");
}, 1000); //ms

//setInterval, run forever for 1 secs, need be stoped
var stopInterval = 0;
var interval = setInterval(function() {
	console.log("");
	console.log("setInterval");
	console.log("for 3 secs");
	console.log("stopInterval: " + stopInterval);
	stopInterval = stopInterval + 1;

	if(stopInterval === 4) {
		clearInterval(interval);
		console.log("");
		console.log("interval stoped!");
		stopInterval = 0;
	}
}, 3000);