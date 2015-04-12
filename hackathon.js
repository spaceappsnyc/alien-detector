var mraa = require('mraa');

var pinNumber = 7; // button
var analogPin = 0;

var dp10 = new mraa.Gpio(10); // LED
var dp7 = new mraa.Gpio(pinNumber);
var analogPin = new mraa.Aio(analogPin);

dp7.dir(mraa.DIR_IN);
dp10.dir(mraa.DIR_OUT);

setInterval(function(){
	var switchState = dp7.read();
	console.log("Pin 7 " + switchState);
	if(switchState == 1) {
		console.log("beeeeeep");
		dp10.write(1);
	} else {
		dp10.write(0);
	}
},1000);